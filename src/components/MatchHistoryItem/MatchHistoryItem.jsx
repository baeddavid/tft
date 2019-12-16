import React, { Component } from "react";
import { Card } from "react-bootstrap"
import * as RiotApi from "../../services/riot-api";
import * as ItemData from "../../data/ItemData";

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

class MatchHistoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            puuid: ""
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
        let unroundedTime = this.props.match.game_length / 60;
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

    getLittleLegends() {
        let companion;
        for(let player of this.props.match.participants) {
            if(player.puuid === this.state.puuid) {
                companion = player.companion.species;
            }
        }
        return companion;
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

    render() {
        console.log(this.getCurrentSummoner());

        let placement = this.summonerPlacement();
        let placementStringObject = this.placementToString(placement);
        let matchDuration = this.getMatchDuration();
        let playerLevel = this.getLittleLegendsLevel();
        let littleLegends = this.getLittleLegends();
        let classSynergies = this.getUnitClassTiers();
        let summonerUnits = this.getSummonerUnits();

        return(
            <>
                <Card className={styles.matchCard}>
                    <Card.Header>{ placementStringObject[placement] }</Card.Header>
                    <Card.Body>
                        <div>{ littleLegends }</div>
                        <div>Level { playerLevel }</div>
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
                        <ul>
                            {summonerUnits.map(unit => {
                                return <li>Name: { unit.name || this.removePrefixFromCharacterId(unit.character_id) } { unit.rarity } Star Level: { unit.tier } Items:
                                    { unit.items.map(item => {
                                        return <ul><li>{ this.getItemNameFromItemId(this.checkIfValidItemId(item)) }<div className={styles.itemIcon} style={{ backgroundImage: `url(${this.getItemIcon(this.getItemNameFromItemId(this.checkIfValidItemId(item)))})`}}></div></li></ul>
                                    }) }
                                </li>
                            })}
                        </ul>
                    </Card.Body>
                    <footer className="blockquote-footer">{ this.props.summoner } { matchDuration }</footer>
                </Card>
            </>
        )
    }
}

export default MatchHistoryItem;