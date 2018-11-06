import React, { Component } from 'react';
import { Footer, FooterSection, FooterLinkList,FooterDropDownSection } from 'react-mdl';

class FooterE extends Component{
    render(){
        return(
            <Footer size="mega" style={{backgroundColor:'black',marginTop:'3px'}}>
            <FooterSection type="middle">
                <FooterDropDownSection title="Features">
                    <FooterLinkList>
                        <a href="/">About</a>
                        <a href="/">Terms</a>
                        <a href="/">Partners</a>
                        <a href="/">Updates</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Details">
                    <FooterLinkList>
                        <a href="/">Specs</a>
                        <a href="/">Tools</a>
                        <a href="/">Resources</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="FAQ">
                    <FooterLinkList>
                        <a href="/">Dúvidads</a>
                        <a href="/">Sugestões</a>
                        <a href="/">Contact-me</a>
                    </FooterLinkList>
                </FooterDropDownSection>
            </FooterSection>
            <FooterSection type="bottom" logo="Title">
                <FooterLinkList>
                    <a href="/">Help</a>
                    <a href="/">Privacy & Terms</a>
                </FooterLinkList>
            </FooterSection>
        </Footer>
        


        )
    }
}

export default FooterE;