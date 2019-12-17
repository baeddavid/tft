import React, { Component } from "react";
import { Card, Collapse } from "react-bootstrap"
import * as RiotApi from "../../services/riot-api";
import * as ItemData from "../../data/ItemData";
import * as ChampionData from "../../data/ChampionData";

import styles from "./MatchHistoryItem.module.css";
import alchemist from "./trait_icons/alchemist.png";
import asssassin from "./trait_icons/assassin.png";
import avatar from "./trait_icons/avatar.png";
import berserker from "./trait_icons/berserker.png";
import blademaster from "./trait_icons/blademaster.png";
import cloud from "./trait_icons/cloud.png";
import crystal from "./trait_icons/crystal.png";
import desert from "./trait_icons/desert.png";
import druid from "./trait_icons/druid.png";
import electric from "./trait_icons/electric.png";
import glacial from "./trait_icons/glacial.png";
import inferno from "./trait_icons/inferno.png";
import light from "./trait_icons/light.png";
import mage from "./trait_icons/mage.png";
import mountain from "./trait_icons/mountain.png";
import mystic from "./trait_icons/mystic.png";
import ocean from "./trait_icons/ocean.png";
import poison from "./trait_icons/poison.png";
import predator from "./trait_icons/predator.png";
import ranger from "./trait_icons/ranger.png";
import shadow from "./trait_icons/shadow.png";
import steel from "./trait_icons/steel.png";
import summoner from "./trait_icons/summoner.png";
import warden from "./trait_icons/warden.png";
import woodland from "./trait_icons/woodland.png";

import bfsword from "./item_icons/bfsword.png";
import blackcleaver from "./item_icons/blackcleaver.png";
import bladeoftheruinedking from "./item_icons/bladeoftheruinedking.png";
import bloodthirster from "./item_icons/bloodthirster.png";
import chainvest from "./item_icons/chainvest.png";
import cloudhex from "./item_icons/cloudhex.png";
import deathblade from "./item_icons/deathblade.png";
import dragonsclaw from "./item_icons/dragonsclasw.png";
import forceofnature from "./item_icons/forceofnature.png";
import frozenheart from "./item_icons/frozenheart.png";
import frozenmallet from "./item_icons/frozenmallet.png";
import giantsbelt from "./item_icons/giantsbelt.png";
import giantslayer from "./item_icons/giantslayer.png";
import guardianangel from "./item_icons/guardianangel.png";
import guinsoosrageblade from "./item_icons/guinsoosrageblade.png";
import gunblade from "./item_icons/gunblade.png";
import handofjustice from "./item_icons/handofjustice.png";
import hush from "./item_icons/hush.png";
import icebornegauntlet from "./item_icons/icebornegauntlet.png";
import infernocinder from "./item_icons/infernocinder.png";
import infernohex from "./item_icons/infernohex.png";
import infinityedge from "./item_icons/infinityedge.png";
import ionicspark from "./item_icons/ionicspark.png";
import jeweledgauntlet from "./item_icons/jeweledgauntlet.png";
import locket from "./item_icons/locket.png";
import ludensecho from "./item_icons/ludensecho.png";
import magescap from "./item_icons/magescap.png";
import morellonomicon from "./item_icons/morellonomicon.png";
import mountainhex from "./item_icons/mountainhex.png";
import needlesslylargerod from "./item_icons/needlesslylargerod.png";
import negatroncloak from "./item_icons/negatroncloak.png";
import oceanhex from "./item_icons/oceanhex.png";
import phantomdancer from "./item_icons/phantomdancer.png";
import qss from "./item_icons/qss.png";
import rabadonsdeathcap from "./item_icons/rabadonsdeathcap.png";
import rapidfirecannon from "./item_icons/rapidfirecannon.png";
import recurvebow from "./item_icons/recurvebow.png";
import redbuff from "./item_icons/redbuff.png";
import redemption from "./item_icons/redemption.png";
import repeatingcrossbow from "./item_icons/repeatingcrossbow.png";
import runaanshurricane from "./item_icons/runaanshurricane.png";
import sattikkshiv from "./item_icons/satikkshiv.png";
import seraphsembrace from "./item_icons/seraphsembrace.png";
import sparringgloves from "./item_icons/sparringgloves.png";
import spatula from "./item_icons/spatula.png";
import spearofshojin from "./item_icons/spearofshojin.png";
import swordbreaker from "./item_icons/swordbreaker.png";
import talismanoflight from "./item_icons/talismanoflight.png";
import tearofthegoddess from "./item_icons/tearofthegoddess.png";
import thiefsglove from "./item_icons/thiefsglove.png";
import thornmail from "./item_icons/thornmail.png";
import titanichydra from "./item_icons/titanichydra.png";
import trapclaw from "./item_icons/trapclaw.png";
import wardensmil from "./item_icons/wardensmail.png";
import youmuusghostblade from "./item_icons/youmuusghostblade.png";
import zekesherald from "./item_icons/zekesherald.png";
import zephyr from "./item_icons/zephyr.png";
import itemnotfound from "./item_icons/itemnotfound.png"

import nami from "./champion_icons/Nami_7.jpg";
import aatrox from "./champion_icons/Aatrox_1.jpg";
import amumu from "./champion_icons/Amumu_17.jpg"
import annie from "./champion_icons/Annie_0.jpg";
import ashe from "./champion_icons/Ashe_5.jpg";
import azir from "./champion_icons/Azir_0.jpg";
import brand from "./champion_icons/Brand_0.jpg";
import drmundo from "./champion_icons/DrMundo_0.jpg";
import ezreal from "./champion_icons/Ezreal_3.jpg";
import janna from "./champion_icons/Janna_0.jpg";
import jax from "./champion_icons/Jax_13.jpg";
import khazix from "./champion_icons/Khazix_2.jpg";
import kindred from "./champion_icons/Kindred_1.jpg";
import kogmaw from "./champion_icons/KogMaw_1.jpg";
import leblanc from "./champion_icons/Leblanc_5.jpg";
import lucian from "./champion_icons/Lucian_0.jpg";
import lux from "./champion_icons/Lux_0.jpg";
import malphite from "./champion_icons/Malphite_0.jpg";
import masteryi from "./champion_icons/MasterYi_1.jpg";
import nasus from "./champion_icons/Nasus_11.jpg";
import nautilus from "./champion_icons/Nautilus_0.jpg";
import nocturne from "./champion_icons/Nocturne_5.jpg";
import olaf from "./champion_icons/Olaf_2.jpg";
import qiyana from "./champion_icons/Qiyana_0.jpg";
import reksai from "./champion_icons/RekSai_1.jpg";
import renekton from "./champion_icons/Renekton_0.jpg";
import senna from "./champion_icons/Senna_0.jpg";
import singed from "./champion_icons/Singed_0.jpg";
import sion from "./champion_icons/Sion_4.jpg";
import sivir from "./champion_icons/Sivir_0.jpg";
import skarner from "./champion_icons/Skarner_0.jpg";
import soraka from "./champion_icons/Soraka_3.jpg";
import syndra from "./champion_icons/Syndra_2.jpg";
import taliyah from "./champion_icons/Taliyah_0.jpg";
import taric from "./champion_icons/Taric_0.jpg";
import twitch from "./champion_icons/Twitch_0.jpg";
import varus from "./champion_icons/Varus_9.jpg";
import vayne from "./champion_icons/Vayne_6.jpg";
import veigar from "./champion_icons/Veigar_0.jpg";
import vladmir from "./champion_icons/Vladimir_8.jpg";
import volibear from "./champion_icons/Volibear_0.jpg";
import warwick from "./champion_icons/Warwick_4.jpg";
import yasuo from "./champion_icons/Yasuo_0.jpg";
import yorick from "./champion_icons/Yorick_3.jpg";
import zyra from "./champion_icons/Zyra_1.jpg";
import malzahar from "./champion_icons/Malzahar_0.jpg";
import zed from "./champion_icons/Zed_1.jpg";
import thresh from "./champion_icons/Thresh_1.jpg";
import ornn from "./champion_icons/Ornn_1.jpg"
import braum from "./champion_icons/Braum_0.jpg";
import diana from "./champion_icons/Diana_3.jpg";
import neeko from "./champion_icons/Neeko_0.jpg";
import maokai from "./champion_icons/Maokai_0.jpg";
import ivern from "./champion_icons/Ivern_0.jpg";

class MatchHistoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            puuid: "",
            open: false,
        }
    }

    componentDidMount() {
        RiotApi.getPuuidFromSummonerName(this.props.summoner)
            .then(res => this.setState({ puuid: res }))
    }

    summonerPlacement() {
        let placement;
        for(let player of this.props.match.participants) {
            if(player.puuid === this.state.puuid) {
                placement = player.placement;
            }
        }
        return placement
    }

    getUnitClassTiers() {
        let classTiers = [];
        for(let player of this.props.match.participants) {
            if(player.puuid === this.state.puuid) {
                for(let tier of player.traits) {
                    if(tier.tier_current > 0) {
                        classTiers.push({ tierName: tier.name, tier: tier.tier_current, tierTotal: tier.tier_total });
                    }
                }
            }
        }
        return classTiers;
    }

    getTierRanking(currentTier, tierTotal) {
        let tierFraction = currentTier / tierTotal;
        switch(tierFraction) {
            case 1/3:
            case 1/2:
                return "Bronze";
            case 2/3:
                return "Silver";
            case 1:
                return "Gold";
        }
    }

    getTierIcon(tierName) {
        switch(tierName) {
            case "Alchemist":
                return alchemist;
            case "Assassin":
                return asssassin;
            case "Avatar":
                return avatar;
            case "Berserker":
                return berserker;
            case"Blademaster":
                return blademaster;
            case "Cloud":
                return cloud;
            case "Crystal":
                return crystal;
            case "Desert":
                return desert;
            case "Druid":
                return druid;
            case "Electric":
                return electric;
            case "Glacial":
                return glacial;
            case "Inferno":
                return inferno;
            case "Light":
                return light;
            case "Mage":
                return mage;
            case "Mountain":
                return mountain;
            case "Mystic":
                return mystic;
            case "Ocean":
                return ocean;
            case "Poison":
                return poison;
            case "Predator":
                return predator;
            case "Ranger":
                return ranger;
            case "Shadow":
                return shadow;
            case "Metal":
                return steel;
            case "Summoner":
                return summoner;
            case "Warden":
                return warden;
            case "Woodland":
                return woodland
        }
    }

    getTierColor(tierRanking) {
        switch(tierRanking) {
            case "Bronze":
                return "rgb(120, 80, 50)";
            case "Silver":
                return "rgb(199, 199, 199)";
            case "Gold":
                return "gold";
        }
    }

    getItemIcon(itemName) {
        switch (itemName) {
            case "Blade of the Ruined King":
                return bladeoftheruinedking;
            case "Berserker's Axe":
                return blackcleaver;
            case "Frozen Mallet":
                return frozenmallet;
            case "Mages Cap":
                return magescap;
            case "Talisman of Light":
                return talismanoflight;
            case "Inferno's Cinder":
                return infernocinder;
            case "Warden's Mail":
                return wardensmil;
            case "Youmuu's Ghostblade":
                return youmuusghostblade;
            case "B.F. Sword":
                return bfsword;
            case "Bloodthirster":
                return bloodthirster;
            case "Chain Vest":
                return chainvest;
            case "Deathblade":
                return deathblade;
            case "Dragon's Claw":
                return dragonsclaw;
            case "Force of Nature":
                return forceofnature;
            case "Repeating Crossbow":
                return repeatingcrossbow;
            case "Giant's Belt":
                return giantsbelt;
            case "Guardian Angel":
                return guardianangel;
            case "Guinsoo's Rageblade":
                return guinsoosrageblade;
            case "Inferno Hex":
                return infernohex;
            case "Mountain Hex":
                return mountainhex;
            case "Ocean Hex":
                return oceanhex;
            case "Cloud Hex":
                return cloudhex;
            case "Hextech Gunblade":
                return gunblade;
            case "Hush":
                return hush;
            case "Iceborne Gauntlet":
                return icebornegauntlet;
            case "Infinity Edge":
                return infinityedge;
            case "Ionic Spark":
                return ionicspark;
            case "Jeweled Guantlet":
                return jeweledgauntlet;
            case "Locked of the Iron Solari":
                return locket;
            case "Luden's Echo":
                return ludensecho;
            case "Giant Slayer":
                return giantslayer;
            case "Morellonomicon":
                return morellonomicon;
            case "Needlessly Large Rod":
                return needlesslylargerod;
            case "Negatron Cloak":
                return negatroncloak;
            case "Phantom Dancer":
                return phantomdancer;
            case "Trap Claw":
                return trapclaw;
            case "Quicksilver":
                return qss;
            case "Rabadon's Deathcap":
                return rabadonsdeathcap;
            case "Rapid Firecannon":
                return rapidfirecannon;
            case "Recurve Bow":
                return recurvebow;
            case "Red Buff":
                return redbuff;
            case "Redemption":
                return redemption;
            case "Runaan's Hurricane":
                return runaanshurricane;
            case "Seraph's Embrace":
                return seraphsembrace;
            case "Sparring Gloves":
                return sparringgloves;
            case "Spatula":
                return spatula;
            case "Spear of Shojin":
                return spearofshojin;
            case "Statikk Shiv":
                return sattikkshiv;
            case "Repeating Crossbow":
                return repeatingcrossbow;
            case "Sword Breaker":
                return swordbreaker;
            case "Tear of the Goddess":
                return tearofthegoddess;
            case "Thief's Gloves":
                return thiefsglove;
            case "Thornmail":
                return thornmail;
            case "Titanic Hydra":
                return titanichydra;
            case "Hand of Justice":
                return handofjustice;
            case "Zeke's Herald":
                return zekesherald;
            case "Zephyr":
                return zephyr;
            case "Mage's Cap":
                return magescap;
            case "Frozen Heart":
                return frozenheart;
            case "Inferno Cinder":
                return infernocinder;
            default:
                return itemnotfound;
        }
    }

    getChampionIcon(championName) {
        switch (championName) {
            case "Nami":
                return nami;
            case "Aatrox":
                return aatrox;
            case "Amumu":
                return amumu;
            case "Annie":
                return annie;
            case "Ashe":
                return ashe;
            case "Azir":
                return azir;
            case "Brand":
                return brand;
            case "DrMundo":
                return drmundo;
            case "Ezreal":
                return ezreal;
            case "Janna":
                return janna;
            case "Jax":
                return jax;
            case "Khazix":
                return khazix;
            case "Kindred":
                return kindred;
            case "KogMaw":
                return kogmaw;
            case "Leblanc":
                return leblanc;
            case "Lucian":
                return lucian;
            case "Lux":
                return lux;
            case "Malphite":
                return malphite;
            case "MasterYi":
                return masteryi;
            case "Nasus":
                return nasus;
            case "Nautilus":
                return nautilus;
            case "Nocturne":
                return nocturne;
            case "Olaf":
                return olaf;
            case "Qiyana":
                return qiyana;
            case "RekSai":
                return reksai;
            case "Renekton":
                return renekton;
            case "Senna":
                return senna;
            case "Singed":
                return singed;
            case "Sion":
                return sion;
            case "Sivir":
                return sivir;
            case "Skarner":
                return skarner;
            case "Soraka":
                return soraka;
            case "Syndra":
                return syndra;
            case "Taliyah":
                return taliyah;
            case "Taric":
                return taric;
            case "Twitch":
                return twitch;
            case "Varus":
                return varus;
            case "Vayne":
                return vayne;
            case "Veigar":
                return veigar;
            case "Vladimir":
                return vladmir;
            case "Volibear":
                return volibear;
            case "Warwick":
                return warwick;
            case "Yasuo":
                return yasuo;
            case "Yorick":
                return yorick;
            case "Zyra":
                return zyra;
            case "Thresh":
                return thresh;
            case "Malzahar":
                return malzahar;
            case "Zed":
                return zed;
            case "Ornn":
                return ornn;
            case "Braum":
                return braum;
            case "Diana":
                return diana;
            case "Neeko":
                return neeko;
            case "Maokai":
                return maokai;
            case "Ivern":
                return ivern;
        }
    }

    getBorderColorFromUnitCost(unitCost) {
        switch (unitCost) {
            case 1:
                return "grey";
            case 2:
                return "rgb(60, 220, 120)";
            case 3:
                return "rgb(50, 180, 190)";
            case 4:
                return "rgb(175, 30, 160)";
            case 5:
            case 7:
                return "rgb(255, 150, 40)";
        }
    }

    getCurrentSummoner() {
        for(let player of this.props.match.participants) {
            if(player.puuid === this.state.puuid) {
                return player;
            }
        }
    }

    getSummonerUnits() {
        let units = [];
        for(let player of this.props.match.participants) {
            if(player.puuid === this.state.puuid) {
                for(let unit of player.units) {
                    units.push(unit);
                }
            }
        }
        return units;
    }

    placementToString(placement) {
        return {
            1: "1st Place",
            2: "2nd Place",
            3: "3rd Place",
            4: "4th Place",
            5: "5th Place",
            6: "6th Place",
            7: "7th Place",
            8: "8th Place"
        }
    }

    //TODO fix time displayed as it displays entire match time not time eliminated
    getMatchDuration() {
        let timeEliminated;
        for(let player of this.props.match.participants) {
            if(player.puuid === this.state.puuid) {
                timeEliminated = player.time_eliminated;
            }
        }

        let unroundedTime = timeEliminated / 60;
        let roundedTime = unroundedTime.toFixed(2);
        roundedTime = roundedTime.toString();
        roundedTime = roundedTime.replace(".", ":");
        return roundedTime;
    }

    getLittleLegendsLevel() {
        let level;
        for(let player of this.props.match.participants) {
            if(player.puuid === this.state.puuid) {
                level = player.level;
            }
        }
        return level;
    }

    getGoldLeft(){
        let goldLeft = 0;
        for(let player of this.props.match.participants) {
            if(player.puuid === this.state.puuid) {
                goldLeft = player.gold_left;
            }
        }
        return goldLeft;
    }

    getLittleLegends() {
        let companion;
        for(let player of this.props.match.participants) {
            if(player.puuid === this.state.puuid) {
                companion = player.companion.species;
            }
        }
        return companion;
    }

    getDamageDealtAndPlayersEliminated() {
        let damageAndEliminationObject = {
            damageDealt: 0,
            playersEliminated: 0
        };
        for(let player of this.props.match.participants) {
            if(player.puuid === this.state.puuid) {
                damageAndEliminationObject.damageDealt = player.total_damage_to_players;
                damageAndEliminationObject.playersEliminated = player.players_eliminated;
            }
        }
        return damageAndEliminationObject;
    }

    getItemNameFromItemId(itemId) {
        if(itemId === 404) return "Oopsy Woopsy Riot API Made a Fucky Wucky xD";
        return ItemData.ITEMS.find(item => item.id === itemId).name;
    }

    checkIfValidItemId(itemId) {
        if(itemId === 10005) return 404;
        else return itemId;
    }

    removePrefixFromCharacterId(characterId) {
        return characterId.slice(5);
    }

    removePrefixFromTier(tierName) {
        return tierName.slice(5);
    }

    doesTierHavePrefix(tierName) {
        return tierName.includes("Set2_");
    }

    returnUnitCostFromName(unitName) {
        let championObject;
        const championObjectArray = ChampionData.CHAMPIONS;

        for(let i = 0; i < championObjectArray.length; i++) {
            if(championObjectArray[i].champion === unitName) {
                return championObjectArray[i].cost;
            }
        }
    }

    returnStars(unitLevel) {
        let stars = [];
        for(let i = 0; i < unitLevel; i++) {
            stars.push(<img src={require("./champion_icons/star.png")} style={{ height: "25px", width: "25px"}}/>)
        }
        return stars;
    }

    render() {
        let placement = this.summonerPlacement();
        let placementStringObject = this.placementToString(placement);
        let matchDuration = this.getMatchDuration();
        let playerLevel = this.getLittleLegendsLevel();
        let littleLegends = this.getLittleLegends();
        let classSynergies = this.getUnitClassTiers();
        let summonerUnits = this.getSummonerUnits();
        let goldLeft = this.getGoldLeft();
        let damageAndEliminationStats = this.getDamageDealtAndPlayersEliminated();

        return(
            <>
                <Card className={styles.matchCard}>
                    <Card.Header>{ placementStringObject[placement] }</Card.Header>
                    <Card.Body>
                        <div>
                            { littleLegends }
                            <div className={styles.stats}>
                                <div>
                                    <i className="fas fa-clock"></i> Time Eliminated: { matchDuration }
                                </div>
                                <div>
                                    <i className="fas fa-coins" style={{ color: "gold" }}></i> Gold Left when Eliminated: { goldLeft }
                                </div>
                                <div>
                                    <i className="fas fa-skull"></i> Players Eliminated: { damageAndEliminationStats.playersEliminated }
                                </div>
                                <div>
                                    <i className="fas fa-bomb" style={{ color: "red" }}></i> Damage dealt to players: { damageAndEliminationStats.damageDealt }
                                </div>
                            </div>
                        </div>
                        <div>
                            Level { playerLevel }
                        </div>
                        <div className={styles.tiers}>
                            {classSynergies.map(tier => {
                                if(this.doesTierHavePrefix(tier.tierName))
                                    return <div className={styles.tierContainer}>
                                    <div className={styles.hexagon} style={{ backgroundImage: `url(${this.getTierIcon(this.removePrefixFromTier(tier.tierName))})`, backgroundColor: `${this.getTierColor(this.getTierRanking(tier.tier, tier.tierTotal))}`}}>
                                        <div className={styles.hexTop} style={{ backgroundColor: `${this.getTierColor(this.getTierRanking(tier.tier, tier.tierTotal))}` }}></div>
                                        <div className={styles.hexBottom} style={{ backgroundColor: `${this.getTierColor(this.getTierRanking(tier.tier, tier.tierTotal))}` }}></div>
                                    </div>
                                </div>;
                                return<div className={styles.tierContainer}>
                                        <div className={styles.hexagon} style={{ backgroundImage: `url(${this.getTierIcon(tier.tierName)})`, backgroundColor: `${this.getTierColor(this.getTierRanking(tier.tier, tier.tierTotal))}`}}>
                                            <div className={styles.hexTop} style={{ backgroundColor: `${this.getTierColor(this.getTierRanking(tier.tier, tier.tierTotal))}` }}></div>
                                            <div className={styles.hexBottom} style={{ backgroundColor: `${this.getTierColor(this.getTierRanking(tier.tier, tier.tierTotal))}` }}></div>
                                        </div>
                                    </div>
                            })}
                        </div>
                        <div className={styles.championContainer}>
                            {summonerUnits.map(unit => {
                                return <Card style={{ width: '18rem' }} className={styles.championCard}>
                                    <Card.Header>
                                    </Card.Header>
                                    <Card.Body className={styles.championCardBody}>
                                        <div className={styles.championItem}>
                                                <div
                                                    onClick={() => this.setState({ open: !this.state.open })}
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={this.state.open}
                                                >
                                                    <div className={styles.championIconContainer}>
                                                        <div className={styles.championIcon}
                                                             style={{ backgroundImage: `url(${this.getChampionIcon(unit.name || this.removePrefixFromCharacterId(unit.character_id))})`,
                                                                 borderColor: `${this.getBorderColorFromUnitCost(this.returnUnitCostFromName(unit.name || this.removePrefixFromCharacterId(unit.character_id)))}`
                                                             }}></div>
                                                    </div>
                                                    <div className={styles.stars}>{ this.returnStars(unit.tier) }</div>
                                                </div>
                                                <div className={styles.itemContainer}>
                                                        { unit.items.map(item => {
                                                            return <div className={styles.itemIcon} style={{ backgroundImage: `url(${this.getItemIcon(this.getItemNameFromItemId(this.checkIfValidItemId(item)))})`}}></div>
                                                        }) }
                                                </div>
                                            </div>
                                    </Card.Body>
                                </Card>
                            })}
                        </div>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default MatchHistoryItem;