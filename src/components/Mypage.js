import {Link, Routes, Route, NavLink} from "react-router-dom";
import "./Mypage.css";
function Nav() {
    return (
        <div>
            <ul>
                <li><NavLink to="/mypage/profile">프로필</NavLink></li>
                <li><NavLink to="/mypage/bodycom">체성분</NavLink></li>
                <li><NavLink to="/mypage/mywrite">내가 쓴 글</NavLink></li>
                <li><NavLink to="/mypage/setting">설정</NavLink></li>
            </ul>
            <Routes>
                <Route path="profile" element={<Profile/>}></Route>
                <Route path="bodycom" element={<Bodycom/>}></Route>
                <Route path="mywrite" element={<Mywrite/>}></Route>
                <Route path="setting/*" element={<Setting/>}></Route>
            </Routes>

        </div>
    )
}

function Profile() {
    return (
        <div>
            <h2>Profile</h2>
            <ul>
                <li>
                    <hr></hr>
                    <div>프로필이미지(member)</div>
                </li>
                <li>
                    <div>헬린이123(member)</div>
                </li>
                <li><Link to="/mypage/follower">팔로워 0(follow)</Link></li>
                <li><Link to="/mypage/following">팔로잉 0(follow)</Link></li>
                <li><Link to="/mypage/setting">설정</Link></li>
                <hr></hr>

                <li><div>나의 헬친</div></li>
                <li><Link to="/mypage/mate">+나의 헬친을 등록해주세요</Link></li>
                <li><div>나의 체성분 변화</div></li>
                <li><Link to="/mypage/bodycom">+나의 체성분을 등록해주세요</Link></li>
            </ul>
        </div>
    )
}

function Bodycom() {
    return (
        <div>
            <h2>Bodycom</h2>
            <ul>
                <li>
                    <hr></hr>
                    <div>프로필이미지(member)</div>
                </li>
                <li>
                    <div>헬린이123(member)</div>
                </li>
                <li><Link to="/mypage/follower">팔로워 0(follow)</Link></li>
                <li><Link to="/mypage/following">팔로잉 0(follow)</Link></li>
                <li><Link to="/mypage/setting">설정</Link></li>
                <hr></hr>

                <li><div>체성분검사 업로드</div></li>
                <li><Link to="/mypage/upload">Input Form</Link></li>
                <li><div>업로드 이력</div></li>
                <li><div>날짜 골격근량 (+-) 체지방량 (+-) (삭제 버튼) </div></li>
                <li><div>List ...</div></li>
            </ul>
        </div>
    )
}

function Mywrite() {
    return (
        <div>
            <h2>Mywrite</h2>
            <ul>
                <li>
                    <hr></hr>
                    <div><h3>내가 쓴 글</h3></div>

                </li>
            </ul>
        </div>
    )
}

function Setting() {
    return (
        <div>
            <hr></hr>
            <ul>
                <li><Link to="/mypage/setting">회원정보 수정</Link></li>
                <li><Link to="/mypage/setting/pwdchange">비밀번호 변경</Link></li>
            </ul>
            Setting...
        </div>
    )
}

function Mypage() {
    return (
        <div>
            <h1>마이페이지</h1>
            <Nav></Nav>
        </div>
    )
}

export default Mypage;