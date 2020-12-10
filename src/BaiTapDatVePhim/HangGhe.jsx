import React, { Component } from 'react'
import {connect} from 'react-redux';
import { datGheAction } from '../redux/actions/BaiTapDatVePhimActions';

class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) =>{
            let cssGheDuocChon = '';
            let disabled = false;
            if(ghe.daDat === true){
                cssGheDuocChon = 'gheDuocChon';
                disabled = true;
            }

            let cssGheDangChon = "";
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if (indexGheDangDat !== -1){
                cssGheDangChon = "gheDangChon"
            }

            return <button onClick={()=>{this.props.datGhe(ghe)}} disabled={disabled} className={`ghe ${cssGheDuocChon} ${cssGheDangChon}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button className="rowNumber">
                {hang.soGhe}
            </button>
        })
        
    }

    renderHangGhe = () => {
        if(this.props.soHangGhe === 0) {
            return <div className="ml-4">
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        } else{
            return <div>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }
    }

    render() {
        return (
            <h4 className="text-light mt-1 ml-5">
                {this.renderHangGhe()}
            </h4>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.stateBaiTapDatVePhimReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HangGhe);


