export default function Information() {
    return (
        <div className="Information">
            <div className="imageCenter">
                <img src={require("../images/old-man-stock-photo0.png")} alt="information" className="image" 
                    height="400px" width="400px" />
            </div>
            <div className="text">
                <h1 className="name">Santiago Fisherman</h1>
                <h2 className="title">Fisherman</h2>
                <h3 className="website">oldmanbythesea.website.com</h3>
                <div className="buttons">
                    <a href="https://www.gmail.com" target="_blank"><button className="email"><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" className="emailLogo"/><span>Email</span></button></a>
                    <a href="https://www.linkedin.com" target="_blank"><button className="linkedin"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png" className="linkedInLogo"/><span>LinkedIn</span></button></a>
                </div>
                <div className="content">
                    <div className="About">
                        <h1>About</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum massa ac ligula molestie tincidunt. Proin at egestas ante. Proin sed lectus nec justo dapibus maximus. Sed consequat ante congue vulputate finibus. Quisque consectetur pellentesque interdum. Aenean imperdiet ligula et convallis vestibulum. </p>
                    </div>

                    <div className="Interests">
                        <h1>Interests</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum massa ac ligula molestie tincidunt. Proin at egestas ante. Proin sed lectus nec justo dapibus maximus. Sed consequat ante congue vulputate finibus. Quisque consectetur pellentesque interdum. Aenean imperdiet ligula et convallis vestibulum. </p>
                    </div>
                </div>
                <div className="footer">
                    <footer>
                        <img src="data:image/png;base64,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" width="40px" height="40px"/>
                        <img src="https://www.dupaco.com/wp-content/uploads/2020/08/social-media-facebook-icon-600x600-2020-1024x1024.png" width="40px" height="40px"/>
                        <img src="https://p7.hiclipart.com/preview/145/166/507/california-state-university-sacramento-social-media-instagram-photography-youtube-insta-thumbnail.jpg"/>
                        <img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" width="40px" height="40px" />
                    </footer>
                </div>
            </div>
        </div>
    );
}