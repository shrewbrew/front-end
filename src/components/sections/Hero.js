import React, { useEffect } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import { Link } from 'react-router-dom';

import ButtonGroup from "../elements/ButtonGroup";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  useEffect(() => { }, [])

  const outerClasses = classNames(
    "hero section center-content",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="m-64">
              First Nations Drinking Water Class Action
            </h1>
            <div className="container-xs">
              <p className="mt-16 mb-32 ">
                The claims period is open. You can submit a Claim Form for
                compensation under the First Nation Drinking Water Settlement.
                The deadline to submit is March 7, 2023.
              </p>
              <div className="reveal-from-bottom">
                {localStorage.getItem('token') ?

                  <>
                    <ButtonGroup>

                      <Link to="claim/personalinfo" className="button button-primary button-wide-mobile button-sm">Create Request</Link>
                      <Link to="claim" className="button button-primary button-wide-mobile button-sm">My Requests</Link>
                      <Link to="claim" className="button button-primary button-wide-mobile button-sm">Public Reading ROom</Link>
                    </ButtonGroup></> :
                  <>
                    <ButtonGroup>

                      <Link to="/login" className="button button-primary button-wide-mobile button-sm">Create Request</Link>
                      <Link to="/login" className="button button-primary button-wide-mobile button-sm">My Requests</Link>
                      <Link to="/login" className="button button-primary button-wide-mobile button-sm">Public Reading ROom</Link>
                    </ButtonGroup></>
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
