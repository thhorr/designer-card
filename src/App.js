import Food from "./components/Food.js";
//import "./App.css";

function App() {
  return (
    <div className="grid">
      <Food
        image="https://th.bing.com/th/id/R.295f19755de5e0fcc36bfb1507cd7a7f?rik=ax417p4w7pWMNw&riu=http%3a%2f%2fwallpapersdsc.net%2fwp-content%2fuploads%2f2015%2f11%2fPizza_Images12.jpg&ehk=xip1pLLPjkFghF07eXxV1St1m9ntpsTnFG%2b%2bi7YuIUs%3d&risl=&pid=ImgRaw&r=0"
        name="Pizza"
        description="This is the pizza do you wan Take me down to the river bend take me down to the fighting end wash the poison from of myt to eat this"
        calorie={1234}
        date="12/7/2022"
        celsius={45}
        price={22}
        discountrate={30}
        icon1="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/357152/1160/772/m1/fpnw/wm0/creativboard-converted-01-.jpg?1424110121&s=85afe5b6b257966e62b4e078e869ff46"
        icon2="https://th.bing.com/th/id/R.1b7329cddc53bd2e80c6b18b09bd65fe?rik=fufaRFfkn3AWKA&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-animals-nature%2f1024%2f22333-sheaf-of-rice-icon.png&ehk=hMDxpZS%2fVDNqfR%2bgBLBJSavnOHgEiE38MfZQ96x3SxQ%3d&risl=&pid=ImgRaw&r=0"
      />
      <Food
        image="https://th.bing.com/th/id/OIP.99AbWmZ3baB3HF8xcT0GnQHaJ4?pid=ImgDet&rs=1"
        name="Tortellini"
        description="Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce."
        calorie={270}
        date="12/7/2022"
        celsius={45}
        price={17.9}
        discountrate={22.9}
        icon1="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/357152/1160/772/m1/fpnw/wm0/creativboard-converted-01-.jpg?1424110121&s=85afe5b6b257966e62b4e078e869ff46"
        icon2="https://th.bing.com/th/id/R.1b7329cddc53bd2e80c6b18b09bd65fe?rik=fufaRFfkn3AWKA&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-animals-nature%2f1024%2f22333-sheaf-of-rice-icon.png&ehk=hMDxpZS%2fVDNqfR%2bgBLBJSavnOHgEiE38MfZQ96x3SxQ%3d&risl=&pid=ImgRaw&r=0"
      />
      <Food
        image="https://th.bing.com/th/id/R.c29204b1e75e2a870189eceee74a11c8?rik=4m0MTtfGGn32Gw&riu=http%3a%2f%2fneighborfoodblog.com%2fwp-content%2fuploads%2f2016%2f05%2feasy-strawberry-cake-recipe-3.jpg&ehk=VjwY5cNn9L1XmRDo%2b3kjW4n5Cem%2bEhUFmL9Mg9A%2bNn4%3d&risl=&pid=ImgRaw&r=0"
        name="Strawberry Cake"
        description="Three layer strawberry dessert is not onlyt beautiful looking, but also delicious! Perfect dessert for spring and summer. "
        calorie={346}
        date="12/7/2022"
        celsius={13.9}
        price={13.9}
        discountrate={18.9}
        icon1="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/357152/1160/772/m1/fpnw/wm0/creativboard-converted-01-.jpg?1424110121&s=85afe5b6b257966e62b4e078e869ff46"
        icon2="https://th.bing.com/th/id/R.1b7329cddc53bd2e80c6b18b09bd65fe?rik=fufaRFfkn3AWKA&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-animals-nature%2f1024%2f22333-sheaf-of-rice-icon.png&ehk=hMDxpZS%2fVDNqfR%2bgBLBJSavnOHgEiE38MfZQ96x3SxQ%3d&risl=&pid=ImgRaw&r=0"
      />
    </div>
  );
}

export default App;
