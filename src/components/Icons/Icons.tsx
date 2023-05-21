import React, { useEffect, useState } from 'react';
import { iconsType } from './IconsTypes';
import { ReactSVG } from 'react-svg'
import './Icons.scss'

interface PropsIcons {
  name: iconsType;
  size?: number;
  color?: string;
}

const Icons: React.FC<PropsIcons> = ({ name, size, color }) => {
  const [loading, setLoading] = useState(true);
  const [ImportedIcon, setImportedIcon] = useState<any>(null);

  useEffect(() => {
    const importIcon = async () => {
      const {default: namedImport} = await import(`../../assets/images/icons/${name}.svg`);
      setImportedIcon(namedImport);
      setLoading(false);
    };
    importIcon();
  }, [name]);
  if(!loading) {
    return (
      <ReactSVG 
        className='icon'
        src={ImportedIcon}
        beforeInjection={(svg) => {
          svg.classList.add(`icon-color-${color}`)
          svg.setAttribute('style', `width: ${size}px; height: ${size}px;`)
        }}
      />
    )
  }
  
  return <></>
};

Icons.defaultProps ={
  size: 24,
  color: 'black'
}

export default Icons;
