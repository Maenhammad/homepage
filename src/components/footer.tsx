import PropTypes from 'prop-types';
import React from 'react';
import Logo from './logo';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';
import FooterNav from './footer-nav';
import FooterSocialLinks from './footer-social-links';

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: '#172340',
      minHeight: '180px',
      justifyContent: 'center',
      color: 'white',
      position: 'relative',
      padding: '60px 100px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      className="big-footer__content"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '120px',
      }}
    >
      <Logo white={true} />
      <FooterNav />
      <FooterSocialLinks />
    </div>
    <div
      className="big-footer__copyright-license"
      style={{
        textAlign: 'center',
      }}
    >
      <span>&copy; {new Date().getFullYear()}</span>{' '}
      <FormattedMessage id="branding.license" />
    </div>
  </footer>
);

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
