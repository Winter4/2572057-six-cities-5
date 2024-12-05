import { useActions, useAppSelector } from '../../store/hooks';
import CityTab from '../CityTab';
import { getCitySelector } from '../../store/selectors';
import type { Cities } from '../../types';

type CitiesListProps = {
  citiesNames: Cities[];
};

// eslint-disable-next-line
const CitiesList: React.FC<CitiesListProps> = ({ citiesNames }: CitiesListProps) => {
  const city = useAppSelector(getCitySelector);
  const { changeCity } = useActions();

  const handleCityChange = (cityName: Cities) => {
    changeCity(cityName);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesNames.map((name) => {
            const isActive = name === city;
            return (
              <CityTab
                key={name}
                name={name}
                isActive={isActive}
                onChange={handleCityChange}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default CitiesList;
