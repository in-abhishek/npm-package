# SHOW CUSTOM SVG

This package is for showing svg icons with custom {Width,Height and Color}

![github](https://img.shields.io/badge/Success-006600?style=for-the-badge&logo=GitHub&logoColor=white)

## Installation

use this command for Installation

```bash
npm i my-first-react-abhishek-6-package 
```

## Usage

```React
import { MyComponent} from 'my-first-react-abhishek-6-package';

const App=()=>{

   return (
     <div className="App">
      <MyComponent width={60} height={60} fill={'blue'} icon_name={'facebook'} className={'facebook'}/>
      <MyComponent width={60} height={100} fill={'green'} icon_name={'facebook'} className={'facebook'} />
      <MyComponent width={30} height={30} fill={'yellow'} icon_name={'twitter'} className={'twitter'} />
    </div>
  );
}

export default App;

```
## Contributing

Contributed By Abhishek 