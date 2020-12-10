import React, { Component } from 'react'
import {connect} from 'react-redux'
import { huyGheAction } from '../redux/actions/BaiTapDatVePhimActions'

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div className="">
                <div className="mt-3">
                    <button className="gheDuocChon"></button> <span className="text-light ml-2" style={{fontSize:30}}>ghế đã đặt</span> <br/>
                    <button className="gheDangChon"></button> <span className="text-light ml-2" style={{fontSize:30}}>ghế đang đặt</span> <br/>
                    <button className="ghe ml-0"></button> <span className="text-light ml-2" style={{fontSize:30}}>ghế chưa đặt</span>
                </div>
                <div className="mt-3">
                    <div className="" style={{maxHeight:350, overflowY: 'scroll'}}>
                        <table className="table" border="2">
                            <thead>
                                <tr className="text-light" style={{fontSize:15}}>
                                    <th>Số ghế</th>
                                    <th>Giá</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="text-warning">
                                {this.props.danhSachGheDangDat.map((gheDangDat, index) =>{
                                    return <tr key={index}>
                                        <td>{gheDangDat.soGhe}</td>
                                        <td>{gheDangDat.gia}</td>
                                        <td><button style={{border:'none', background:'transparent'}} onClick={()=>{this.props.dispatch(huyGheAction(gheDangDat.soGhe))}}><span className="text-danger"><i class="fa fa-times"></i></span></button></td>
                                    </tr>
                                })}
                            </tbody>
                            <tfoot>
                            <tr className="text-warning">
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                                    return tongTien += gheDangDat.gia;
                                },0).toLocaleString()}</td>
                            </tr> 
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.stateBaiTapDatVePhimReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(ThongTinDatGhe)
