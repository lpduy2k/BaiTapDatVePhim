import React, { Component } from 'react'
import './BaiTapDatVePhim.css'
import HangGhe from './HangGhe'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGheData from '../Data/danhSachGhe.json'

export default class BaiTapDatVePhim extends Component {
    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <div key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
        })
    }

    render() {
        return (
            <div className="bookingMovie">
                <div className="bookingMovie2">
                    <div className="bookingMovie3 mt-1">
                        <div className="row">
                            <div className="col-8">
                                <h3 className="text-warning text-center">ĐẶT VÉ XEM PHIM</h3>
                                <h6 className="text-light text-center mt-1">Màn hình</h6>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>                                
                                    <div className="screen"></div>
                                </div>
                                {this.renderHangGhe()}
                            </div>
                            <div className="col-4">
                            <h3 className="text-light text-center">DANH SÁCH GHẾ BẠN CHỌN</h3>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
