import React, { Component } from 'react';
import './allgame.css';

class AllGame extends Component {
    state = {
        featuredGame: [
            { name: "game1" }, { name: "game2" }, { name: "game3" }, { name: "game4" },
            { name: "game1" }, { name: "game2" }, { name: "game3" }, { name: "game4" }
        ],
        slotsGame: [
            { name: "game1" }, { name: "game2" }, { name: "game3" }, { name: "game4" },
            { name: "game1" }, { name: "game2" }, { name: "game3" }, { name: "game4" }
        ],
        tableGame: [
            { name: "game1" }, { name: "game2" }, { name: "game3" }, { name: "game4" },
            { name: "game1" }, { name: "game2" }, { name: "game3" }, { name: "game4" }
        ],
        listImgFeatured: [{ name: "game1" }, { name: "game2" }, { name: "game3" }, { name: "game4" }],
        listImgSlots: [{ name: "game1" }, { name: "game2" }, { name: "game3" }, { name: "game4" }],
        listImgTable: [{ name: "game1" }, { name: "game2" }, { name: "game3" }, { name: "game4" }],
        posFeaturedPrevious: 0,
        posSlotPrevious: 0,
        posTablePrevious: 0,
        posFeaturedNext: 3,
        posSlotNext: 3,
        posTableNext: 3
    }

    updatePosAdd(next, previous) {
        next = next + 1;
        previous = previous + 1;
        return { next, previous };
    }

    updateListImg(list, img) {
        list.splice(0, 1);
        list.push(img);
        return list;
    }

    nextImgGame(listTotal, list, posNext, posPrevious) {
        if (posNext < (listTotal.length) - 1) {
            let nextImg = listTotal[posNext + 1];
            this.updateListImg(list, nextImg);
            return this.updatePosAdd(posNext, posPrevious);
        }
        return { next: posNext, previous: posPrevious };
    }

    updateFeatured(posFeaturedNext, posFeaturedPrevious, listImgFeatured) {
        this.setState({ listImgFeatured, posFeaturedNext, posFeaturedPrevious });
    }

    updateSlot(posSlotNext, posSlotPrevious, listImgSlots) {
        this.setState({ posSlotNext, posSlotPrevious, listImgSlots });
    }

    updateTable(posTableNext, posTablePrevious, listImgTable) {
        this.setState({ posTableNext, posTablePrevious, listImgTable });
    }

    handleFeaturedNext(listTotal, list) {
        const { posFeaturedPrevious, posFeaturedNext } = this.state;
        let { next, previous } = this.nextImgGame(listTotal, list, posFeaturedNext, posFeaturedPrevious);
        this.updateFeatured(next, previous, list);
    }

    handleSlotNext(listTotal, list) {
        const { posSlotPrevious, posSlotNext } = this.state;
        let { next, previous } = this.nextImgGame(listTotal, list, posSlotNext, posSlotPrevious);
        this.updateSlot(next, previous, list);
    }

    handleTableNext(listTotal, list) {
        const { posTablePrevious, posTableNext } = this.state;
        let { next, previous } = this.nextImgGame(listTotal, list, posTableNext, posTablePrevious);
        this.updateTable(next, previous, list);
    }

    updatePosLess(next, previous) {
        next = next - 1;
        previous = previous - 1;
        return { next, previous };
    }

    updatePrevious(list, previousImg) {
        list.splice(3, 1);
        list = [previousImg, ...list];
        return list;
    }

    previousImgGame(listTotal, list, posNext, posPrevious) {
        if (posPrevious > 0) {
            let previousImg = listTotal[posPrevious - 1];
            let newList = this.updatePrevious(list, previousImg);
            let { next, previous } = this.updatePosLess(posNext, posPrevious);
            return { next, previous, newList }
        }
        return { next: posNext, previous: posPrevious, newList: list };
    }

    handleFeaturedPrevious(listTotal, list) {
        const { posFeaturedPrevious, posFeaturedNext } = this.state;
        let { next, previous, newList } = this.previousImgGame(listTotal, list, posFeaturedNext, posFeaturedPrevious);
        this.updateFeatured(next, previous, newList);
    }

    handleSlotPrevious(listTotal, list) {
        const { posSlotPrevious, posSlotNext } = this.state;
        let { next, previous, newList } = this.previousImgGame(listTotal, list, posSlotNext, posSlotPrevious);
        this.updateSlot(next, previous, newList);
    }

    handleTablePrevious(listTotal, list) {
        const { posTablePrevious, posTableNext } = this.state;
        let { next, previous, newList } = this.previousImgGame(listTotal, list, posTableNext, posTablePrevious);
        this.updateTable(next, previous, newList);
    }

    renderImg(tag) {
        return <img src={`/assets/${tag.name}.jpg`} alt="game" />;
    }

    render() {
        const {
            listImgFeatured,
            listImgSlots,
            listImgTable,
            featuredGame,
            slotsGame,
            tableGame
        } = this.state;
        return (
            <div className="border-m-top-50 background text-color block">
                <div className="container block">
                    <div className="row">
                        <div className="col-sm-9">
                            <a className="nav-search" href="">ALL GAMES</a>
                            <a className="nav-search" href="">SLOTS</a>
                            <a className="nav-search" href="">TABLE GAMES</a>
                            <a className="nav-search" href="">LIVE CASINO</a>
                            <a className="nav-search" href="">VIDEO POKER</a>
                            <a className="nav-search" href="">OTHER GAMES</a>
                        </div>
                        <div className="col-sm-3 group">
                            <input className="input-search" type="text" placeholder="Search Game" aria-label="Search Games" />
                            <i className="fa icon fa-search"></i>
                        </div>
                    </div>
                    <div className="text-color margin-left">
                        <div><span>FEATURED GAMES [14]</span></div>
                        <div className="imgGame">
                            <button className="btn-icon margin-left-15" onClick={() => this.handleFeaturedPrevious(featuredGame, listImgFeatured)}><img src="/assets/chev_left.png" alt="previous" /></button>
                            {
                                listImgFeatured.map((tag) => this.renderImg(tag))
                            }
                            <button className="btn-icon margin-right-15"
                                onClick={() => this.handleFeaturedNext(featuredGame, listImgFeatured)}><img className="margin-left-90" src="/assets/chev_right.png" alt="next" /></button>
                        </div>
                    </div>
                    <div className="imgGame margin-left">
                        <div><span>SLOTS [55]</span></div>
                        <button
                            className="btn-icon margin-left-15"
                            onClick={() => this.handleSlotPrevious(slotsGame, listImgSlots)}>
                            <img src="/assets/chev_left.png" alt="previous" />
                        </button>
                        {
                            listImgSlots.map((tag) => this.renderImg(tag))
                        }
                        <button
                            className="btn-icon margin-right-15"
                            onClick={() => this.handleSlotNext(slotsGame, listImgSlots)}
                        ><img className="margin-left-90" src="/assets/chev_right.png" alt="next" /></button>
                    </div>
                    <div className="imgGame margin-left">
                        <div><span>TABLE GAMES [47]</span></div>
                        <button
                            className="btn-icon margin-left-15"
                            onClick={() => this.handleTablePrevious(tableGame, listImgTable)}>
                            <img src="/assets/chev_left.png" alt="previous" />
                        </button>
                        {
                            listImgTable.map(tag => this.renderImg(tag))
                        }
                        <button
                            className="btn-icon margin-right-15"
                            onClick={() => this.handleTableNext(tableGame, listImgTable)}>
                            <img className="margin-left-90" src="/assets/chev_right.png" alt="next" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AllGame;
