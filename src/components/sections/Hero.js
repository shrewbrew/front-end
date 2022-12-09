import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";

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
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://cruip.com/"
                  >
                    Create Request
                  </Button>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://github.com/cruip/open-react-template/"
                  >
                    My Requests
                  </Button>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://github.com/cruip/open-react-template/"
                  >
                    Public Reading Room
                  </Button>
                </ButtonGroup>
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
