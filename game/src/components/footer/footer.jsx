import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="container border-top">
            <div className="border-m-top-50" ><img src="/assets/countries.png" alt="Countries" /></div>
            <div className="border-m-top-50">
                <img src="/assets/partners.png" alt="parners" />
            </div>
            <div className="border-m-top-100">
                <div className="row">
                    <div className="col-sm-3">
                        <img src="/assets/gamblingcommission.png" alt="Arabian Nights" />
                        <img src="/assets/mga.png" alt="Arabian Nights" />
                    </div>
                    <div className="col-sm-9 text-color">
                        CasumoServicesLimited,companyregistrationnumberC55663, withregisteredaddresat'UnicornCentre,Triql-Uqija,Swieqi,SWQ 2335,Malta',is licensedtooperateremotegamingbusinesbytheMaltaGamingAuthorityunderthefolowinglicenses:MGA/CL1/815/2012isuedonthe9thAugust 2012;MGA/CL1/966/2014isuedonthe3rdJune2014;MGA/CL1/1026/2014isuedonthe14thNovember2014;MGA/CL1/1054/2014isuedonthe25th February2015;MGA/CL1/107/2015;MGA/CL1/108/2015;MGA/CL1/109/2015,alisuedonthe26thNovember2015;MGA/CL1/168/2016isuedon October2016;andMGA/CL1/1290/2016isuedonthe5thSeptember2017.CasumoServicesLimitedisalsolicensedandregulatedintheUnited Kingdom bytheUKGamblingCommisionunderLicenceNumber000-039265-R-319417-010.GamesprovidedbyIGT(Alderney4)Limitedandby JadestoneNetworks(Malta)LimitedarelicensedandregulatedbytheAlderneyGamblingControlCommision(AGCC).Contactusonhey@casumo.com. Gamblingcanbeaddictive,pleaseplayresponsibly
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;