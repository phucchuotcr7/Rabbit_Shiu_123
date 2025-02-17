import React, { Component} from 'react'
import axios from 'axios'
import { API_URL } from '../constants/urls'
import VerifyRegisterAccount from '../components/verify.register.account/verify.register.account'
import NotFound from '../components/404/404'
class VerifyRegisterAccountContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            isconfirm: true
        }
    }
    async componentWillMount() {
        try {
           await axios.get(`${API_URL}/user/verify/` + this.props.match.params.token)
        }
        catch(err) {
            this.setState({isconfirm: false})
        }
    }
    render() {
        if(this.state.isconfirm) {
            return(
                <VerifyRegisterAccount/>
            )
        } else {
            return (
                <NotFound/>
            )
        }
            
    }
}
export default VerifyRegisterAccountContainer