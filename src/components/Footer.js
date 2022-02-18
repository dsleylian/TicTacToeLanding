import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';

function Footer() {

return(
    <div id="footer">
        <div className="footer-container">
            <h1 className="footer-h1">Tic Tac Toe</h1>
            <ul className="footer-button-ul">
                <li className="button footer-button" > 
                    <a href="https://tictactoe-sgtheme.surge.sh/">Play Now</a>
                </li>
            </ul>
            <ul className="footer-icons-ul">
            <li>
                    <a href="https://www.daryaleylian.com" target="_blank" rel="noreferrer">
                    <svg version="1.1" id="Layer_2_00000012474277209711642730000006484398934844295580_"
                        xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="632px" height="664px"
                        viewBox="0 0 632 664" className="logo-for-hover footer-icons" >
                
                    <g>
                        <polygon className="st0 " points="157.2,424.1 153.7,421.4 151.2,420.7 149.4,418.5 146.9,417.8 144.7,415.6 143.3,415.6 143.3,414.9 
                            141.5,414.9 141.2,413.9 129.4,410.7 123.6,410.3 118.6,411.4 112.9,413.5 106.4,417.8 103.6,422.5 102.9,431 103.2,435.7 
                            109.6,442.5 110.1,442.5 118.7,446.3 123.7,447 135.4,445.9 143.3,445.6 143.3,444.9 145.8,444.5 155.1,438.8 161.2,433.8 
                            161.9,431.6 161.5,429.5 	"/>
                        <path className="st0 cls-1" d="M567,292.5c-28.2,0-30.4,28-49,28c-6.3,0-18-6.7-18-17V137c0-2.8-2.2-5-5-5H289.1c-18.8,0-18-9.9-18-16
                            c0-19.7,15-24.8,15-51c0-39.5-26.6-65-66-65c-38.4,0-61,24.2-61,65c0,28.2,28,30.4,28,49c0,6.3-6.7,18-17,18H5c-2.8,0-5,2.2-5,5
                            v101.5c0,10.3,11.7,17,18,17c18.6,0,20.8-28,49-28c40.8,0,65,22.6,65,61c0,39.4-25.5,66-65,66c-26.2,0-31.3-15-51-15
                            c-6.1,0-16-0.8-16,18V527c0,2.8,2.2,5,5,5h204.1c18.8,0,18,9.9,18,16c0,19.7-15,24.8-15,51c0,39.5,26.6,65,66,65
                            c38.4,0,61-24.2,61-65c0-28.2-28-30.4-28-49c0-6.3,6.7-18,17-18H495c2.8,0,5-2.2,5-5V422.5c0-18.8,9.9-18,16-18
                            c19.7,0,24.8,15,51,15c39.5,0,65-26.6,65-66C632,315.1,607.8,292.5,567,292.5z M413.3,312.4v6.1l-1.4,9.3l-1.1,0.7l-1,11.5l-2.9,11
                            l-3.2,11.1l-3.1,10.7l-4,10.7l-2.9,5.3l-3.9,10l-1.8,2.2l-0.4,2.9l-3.2,4.7v1.8l-1.4,0.4l-0.4,1.8h-0.7v1.8h-0.6v1.4l-1.4,0.7
                            l-0.7,2.1l-1.4,0.7l-1.1,2.5l-5.3,5.8L371,430l-1.8,1.1l-0.4,2.5l-2.2,1.8l-1.4,0.4l-0.4,2.1l-3.2,2.5v1.1l-7.5,8.9l-8.2,7.9
                            l-9,6.8l-5,2.9l-1.8,2.1h-1.8l-0.7,1.8h-1.4l-1.8,2.1l-5,2.9l-10.3,3.9l-11.8,3.6l-10.7,3.6h-5l-3.5,1.1h-3.2l-0.4-1.1l-5.8-0.7
                            l-11.5,1.4l-0.7-0.7l-11.5-2.1l-5.8-1.8l-0.7-1.1l-5.8-1.1l-9.6-5.3l-3.2-2.5l-4.3-1.1l-1.4-2.1l-2.1-0.4l-0.7-1.4l-2.1-0.4
                            l-2.5-3.6l-2.5-1.1l-1.4-2.5l-3.9-1.1l-2.9-1.8l-5.3,2.1l-7.9,5.4h-1.1l-1.1,1.1l-2.2,0.4l-1.8,1.8l-5.4,3.2l-10,3.6l-2.9,1.1h-2.5
                            l-0.7,0.7l-10,1.8l-6.1,1.8l-11.5,0.7l-11.8-1.1h-5.8l-2.1-1.4l-5.3-1.1l-4.3-2.1H97l-5.1-2.9l-7.9-7.2l-9.4-9.3l-3.8-9.6
                            l-3.2-11.5l-0.4-8.9l3.8-8.2l0.7-5.8l3.2-7.2l7.1-8.9l8.6-7.1l1.4-0.3l6.4-4.7l10.7-2.9l5-1.8l11.5-0.4l11.1,1h3.9l0.7,0.7h2.5
                            l9.6,5l5.8,2.5l2.9,2.2l0.4,1.1l2.5,0.3l9.6,6.1l5,3.2l5.8,2.1l0.7,0.4l1.4-0.4l3.9-3.8l4.6-10l1.8-2.5l1.8-5.4l1.1-0.7l2.5-7.5
                            l0.7-0.4l0.3-2.1l1.1-1.1l2.5-8.2l1.1-1.1l3.6-10.4l1.1-0.7l2.8-8.2l1.8-2.1l1-4.6l2.2-6.1l1.1-0.7l0.4-2.1l1.8-2.5l2.9-9.3
                            l2.1-5.8v-1.4l1.8-1.8l1.4-5l4.3-10.4l1.8-2.5l2.1-5.3v-2.3l5-10.7l0.7-2.9l2.9-4.6l2.2-5.4l3.2-4.6l3.8-3.8l2.9-4.6l8.9-7.5
                            l6.9-4.5l1.4-1.8h1.8v-1.1h1.4l4.6-2.1l11.8-2.9l5.4,1.1l3.6,2.5l2.8,8.2l1.8,5.8l-1.1,5.8l-3.2,4.3l-8.6,7.9l-7.4,9.3l-0.7,2.5
                            l-3.3,4.7l-1.4,3.6l-2.1,2.2l-3.6,10.7v1.4h-1.1l-0.4,4.3l-2.1,4.3l-2.1,2.1v1.4h-0.7v1.8h-1.1v1.5h-0.7l-2.9,10.4l-1.1,2.8
                            l-1.1,0.7l-1.1,5.8l-4.3,8.9h-0.7l-3.6,10l-4.7,11.5l-0.4,2.7l-4.6,9.6l-4.3,10.3l-4.7,10.7l-3.9,10.4l-2.9,3.6l-0.4,2.2l-2.1,2.1
                            l-1.8,3.6v1.4l-1.8,1.8v1.4l-2.1,1.8l-2.9,5l-0.7,3.2l0.4,2.5l3.2,5l9.6,6.1l1.1,1.4l3.6,1.4l2.5,1.8l9.6,2.9l5,1.4l11.1,1.1
                            l11.5-1.4l4.3-1.1l1.4-1.1l7.1-1.4l9.6-5.8l2.5-0.3l9-6.8l8.2-8.6l7.5-6.8l0.7-2.1l3.9-3.6l1.1-3.6l5-6.1l5-6.8l1.4-0.6l0.4-2.5
                            l3.9-8.9l2.1-2.1l1.8-5.4l1.8-1.8l1.4-5.3l5.8-10.4l0.4-5.8h0.7l1.1-5.8l3.2-7.2l1.4-11.5l1.4-10.7l1.1-11.8l1.1-11.1l-1.8-11.5
                            V273l-0.7-5.4l-2.9-11.5l-4.6-10.4l-5.4-10.8l-2.5-3.8l-7.1-7.1l-4.7-2.9l-6.8-6.1l-2.5-0.7v-1.1h-1.8v-0.7h-1.4v-0.7l-9.6-3.2
                            l-11.5-3.6l-9.6-1.4l-12.1-0.4l-12.2,0.7l-10,2.5l-11.1,3.2l-10.4,4.6l-9.3,5.4l-10.4,5.8l-7.1,8.2l-6.4,7.6l-6.4,7.5l-0.3,2.9
                            l-1.4,0.7l-1.4,3.6l-1.4,1.8l-0.7,2.9l-1.8,1.4l-0.7,2.5l-1.8,2.1L194,271l-0.7,0.7v2.8l-3.6,10.4l-0.7,11.5l1.1,11.1l3.2,11.1
                            l1.8,5.3v5.4l-3.2,4.7l-9.3,6.4l-2.9,2.9l-2.1,0.4l-1.8,1.3l-6.1,1.4l-3.6-1.8l-1.8-2.5l-1.4-0.4l-1.1-3.9l-2.8-5.4l-0.4-2.5
                            l-2.5-3.6l-1.1-5.8l-1.1-12.5l-0.7-11.1v-11.8l2.1-10.7l2.5-11.5l2.2-10h1v-1.4h0.7v-1.8h0.7l1.4-5l4.3-7.9l1.1-1.1l0.4-2.1
                            l3.8-4.6l1.8-3.6l2.5-0.7l3.6-4.3l2.2-1.4v-1.4l2.8-3.2l1.1-2.5l4.3-3.8l2.5-0.7l8.2-8.2l4.6-3.9l9.6-5.8l10.4-5l1.8-1.8l10.3-3.6
                            l2.5-0.4v-0.7l11.2-4L264,172l11.1-1.4l10-1.4l12.5-0.4l11.5,1.1h2.5l2.8,1.1l5.8,0.4l10,3.2l9.6,2.5l0.7,1.1l3.9,1.1l1.1,1.1
                            l6.5,1.1v0.7l7.9,3.6l1.8,2.1l2.5,0.7l2.5,3.6l2.5,1.1l1.4,1.8l2.1,0.4l2.1,3.2l5,3.2l2.2,3.9l6.4,7.9l3.9,4.3l6.4,9.6v1.4h1.1v1.8
                            h0.7v1.4l3.8,8.9l4.3,10.7l1.4,11.1l1.8,4.7l1.1,11.1l0.4,11.8l0.7,5.3l-1.4,5.8L413.3,312.4z"/>
                    </g>
                    </svg>
                    </a>
                </li>
                <li>
                    <a href="mailto:@daryaleylian@gmail.com"> 
                        <svg className="logo-for-hover-mail footer-icons" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 330.001 330.001" fill="white" >
                            <g   id="XMLID_348_">
                                <path id="XMLID_350_" d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602
                                L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"
                                />
                                <polygon  id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40 	"/>
                            </g>
                        </svg>
                    </a> 
                </li>
                <li> 
                    <a target="_blank" href="https://github.com/dsleylian/TicTacToe-StargateTheme" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} size="2x"/>  </a>
                </li>
                <li> 
                    <a target="_blank" href="https://www.linkedin.com/in/darya-leylian-a1a62057/" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} size="2x"/>  </a>
                </li>
                <li> 
                    <a target="_blank" href="https://www.instagram.com/darya.puzzledorffer/" rel="noreferrer"> <FontAwesomeIcon icon={faInstagram} size="2x"/>  </a>
                </li>
            </ul>
        </div>
    </div>
)}

export default Footer;