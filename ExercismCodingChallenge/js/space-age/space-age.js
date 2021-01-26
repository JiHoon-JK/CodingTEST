//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const earth_year = 31557600

export const age = (planet,second) => {
  // 1년 = 31,557,600초
  // 주어진 second를 년으로 계산하고, 소수점 3번째자리에서 올려줌.
  if(planet == 'mercury'){
    // 수성 1년 = 1year * 0.2408467
    const mercury_year = earth_year * 0.2408467;
    const convert_mercury_year = Math.round((second/mercury_year)*100)/100;
    return convert_mercury_year;
  }
  if(planet == 'venus'){
    // 금성 1년 = 1year * 0.61519726
    const venus_year = earth_year * 0.61519726;
    const convert_venus_year = Math.round((second/venus_year)*100)/100;
    return convert_venus_year;
  }
  if(planet == 'earth'){
    // 지구 1년
    const convert_earth_year = Math.round((second/earth_year)*100)/100;
    return convert_earth_year;
  }
  if (planet == 'mars'){
    // 화성 1년 = 1year * 1.8808158
    const mars_year = earth_year * 1.8808158;
    const convert_mars_year = Math.round((second/mars_year)*100)/100;
    return convert_mars_year;
  }
  if (planet == 'jupiter'){
    // 목성 1년 = 1year * 11.862615
    const jupiter_year = earth_year * 11.862615;
    const convert_jupiter_year = Math.round((second/jupiter_year)*100)/100;
    return convert_jupiter_year;
  }
  if (planet == 'saturn'){
    // 토성 1년 = 1year * 29.447498
    const saturn_year = earth_year * 29.447498;
    const convert_saturn_year = Math.round((second/saturn_year)*100)/100;
    return convert_saturn_year;
  }
  if (planet == 'uranus'){
    // 천왕성 1년 = 1year * 84.016846
    const uranus_year = earth_year * 84.016846;
    const convert_uranus_year = Math.round((second/uranus_year)*100)/100;
    return convert_uranus_year;
  }
  if (planet == 'neptune'){
    // 해왕성 1년 = 1year * 164.79132
    const neptune_year = earth_year * 164.79132;
    const convert_neptune_year = Math.round((second/neptune_year)*100)/100;
    return convert_neptune_year;
  }
};
