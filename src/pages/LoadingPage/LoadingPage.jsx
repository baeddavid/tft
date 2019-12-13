import React, { Component } from 'react';
import styles from "./LoadingPage.module.css";

class LoadingPage extends Component {
    state = {
        message: "Bullying Poros"
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        setTimeout(() => this.setState({ message: "This is taking longer than usual..." }), 15000);
        setTimeout(() => this.setState({ message: "This is why David isn't hired yet" }), 25000);
    }

    render() {
        return(
            <div className={styles.background}>
                <div className={styles.loader}>
                    <span className={styles.box}></span>
                    <span className={styles.box}></span>
                    <div className="code">
                        <img src={require("./cryingporo.png")} width="120px"/>
                    </div>
                    <span className={styles.txt}>{this.state.message}</span>
                </div>
            </div>
        )
    }
}

export default LoadingPage;