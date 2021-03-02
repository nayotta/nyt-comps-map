import { css } from 'lit-element';
export const styles = css `
  :host {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .col-1 { flex: 0 0 4.1666667%; }
  .col-2 { flex: 0 0 8.333333%; }
  .col-3 { flex: 0 0 12.5%; }
  .col-4 { flex: 0 0 16.666667%; }
  .col-5 { flex: 0 0 20.833333%; }
  .col-6 { flex: 0 0 25%; }
  .col-7 { flex: 0 0 29.166667%; }
  .col-8 { flex: 0 0 33.333333%; }
  .col-9 { flex: 0 0 37.5%; }
  .col-10 { flex: 0 0 41.666667%; }
  .col-11 { flex: 0 0 45.833333%; }
  .col-12 { flex: 0 0 50%; }
  .col-13 { flex: 0 0 54.166667%; }
  .col-14 { flex: 0 0 58.333333%; }
  .col-15 { flex: 0 0 62.5%; }
  .col-16 { flex: 0 0 66.666667%; }
  .col-17 { flex: 0 0 70.833333%; }
  .col-18 { flex: 0 0 75%; }
  .col-19 { flex: 0 0 79.166667%; }
  .col-20 { flex: 0 0 83.333333%; }
  .col-21 { flex: 0 0 87.5%; }
  .col-22 { flex: 0 0 91.666667%; }
  .col-23 { flex: 0 0 95.833333%; }
  .col-24 { flex: 0 0 100%; }

  /* xs */
  @media screen and (max-width: 768px) {
    .col-xs-1 { flex: 0 0 4.1666667%; }
    .col-xs-2 { flex: 0 0 8.333333%; }
    .col-xs-3 { flex: 0 0 12.5%; }
    .col-xs-4 { flex: 0 0 16.666667%; }
    .col-xs-5 { flex: 0 0 20.833333%; }
    .col-xs-6 { flex: 0 0 25%; }
    .col-xs-7 { flex: 0 0 29.166667%; }
    .col-xs-8 { flex: 0 0 33.333333%; }
    .col-xs-9 { flex: 0 0 37.5%; }
    .col-xs-10 { flex: 0 0 41.666667%; }
    .col-xs-11 { flex: 0 0 45.833333%; }
    .col-xs-12 { flex: 0 0 50%; }
    .col-xs-13 { flex: 0 0 54.166667%; }
    .col-xs-14 { flex: 0 0 58.333333%; }
    .col-xs-15 { flex: 0 0 62.5%; }
    .col-xs-16 { flex: 0 0 66.666667%; }
    .col-xs-17 { flex: 0 0 70.833333%; }
    .col-xs-18 { flex: 0 0 75%; }
    .col-xs-19 { flex: 0 0 79.166667%; }
    .col-xs-20 { flex: 0 0 83.333333%; }
    .col-xs-21 { flex: 0 0 87.5%; }
    .col-xs-22 { flex: 0 0 91.666667%; }
    .col-xs-23 { flex: 0 0 95.833333%; }
    .col-xs-24 { flex: 0 0 100%; }
  }

  /* sm */
  @media screen and (min-width: 768px) and (max-width: 992px) {
    .col-sm-1 { flex: 0 0 4.1666667%; }
    .col-sm-2 { flex: 0 0 8.333333%; }
    .col-sm-3 { flex: 0 0 12.5%; }
    .col-sm-4 { flex: 0 0 16.666667%; }
    .col-sm-5 { flex: 0 0 20.833333%; }
    .col-sm-6 { flex: 0 0 25%; }
    .col-sm-7 { flex: 0 0 29.166667%; }
    .col-sm-8 { flex: 0 0 33.333333%; }
    .col-sm-9 { flex: 0 0 37.5%; }
    .col-sm-10 { flex: 0 0 41.666667%; }
    .col-sm-11 { flex: 0 0 45.833333%; }
    .col-sm-12 { flex: 0 0 50%; }
    .col-sm-13 { flex: 0 0 54.166667%; }
    .col-sm-14 { flex: 0 0 58.333333%; }
    .col-sm-15 { flex: 0 0 62.5%; }
    .col-sm-16 { flex: 0 0 66.666667%; }
    .col-sm-17 { flex: 0 0 70.833333%; }
    .col-sm-18 { flex: 0 0 75%; }
    .col-sm-19 { flex: 0 0 79.166667%; }
    .col-sm-20 { flex: 0 0 83.333333%; }
    .col-sm-21 { flex: 0 0 87.5%; }
    .col-sm-22 { flex: 0 0 91.666667%; }
    .col-sm-23 { flex: 0 0 95.833333%; }
    .col-sm-24 { flex: 0 0 100%; }
  }

  /* md */
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    .col-md-1 { flex: 0 0 4.1666667%; }
    .col-md-2 { flex: 0 0 8.333333%; }
    .col-md-3 { flex: 0 0 12.5%; }
    .col-md-4 { flex: 0 0 16.666667%; }
    .col-md-5 { flex: 0 0 20.833333%; }
    .col-md-6 { flex: 0 0 25%; }
    .col-md-7 { flex: 0 0 29.166667%; }
    .col-md-8 { flex: 0 0 33.333333%; }
    .col-md-9 { flex: 0 0 37.5%; }
    .col-md-10 { flex: 0 0 41.666667%; }
    .col-md-11 { flex: 0 0 45.833333%; }
    .col-md-12 { flex: 0 0 50%; }
    .col-md-13 { flex: 0 0 54.166667%; }
    .col-md-14 { flex: 0 0 58.333333%; }
    .col-md-15 { flex: 0 0 62.5%; }
    .col-md-16 { flex: 0 0 66.666667%; }
    .col-md-17 { flex: 0 0 70.833333%; }
    .col-md-18 { flex: 0 0 75%; }
    .col-md-19 { flex: 0 0 79.166667%; }
    .col-md-20 { flex: 0 0 83.333333%; }
    .col-md-21 { flex: 0 0 87.5%; }
    .col-md-22 { flex: 0 0 91.666667%; }
    .col-md-23 { flex: 0 0 95.833333%; }
    .col-md-24 { flex: 0 0 100%; }
  }

  /* lg */
  @media screen and (min-width: 1200px) and (max-width: 1920px) {
    .col-lg-1 { flex: 0 0 4.1666667%; }
    .col-lg-2 { flex: 0 0 8.333333%; }
    .col-lg-3 { flex: 0 0 12.5%; }
    .col-lg-4 { flex: 0 0 16.666667%; }
    .col-lg-5 { flex: 0 0 20.833333%; }
    .col-lg-6 { flex: 0 0 25%; }
    .col-lg-7 { flex: 0 0 29.166667%; }
    .col-lg-8 { flex: 0 0 33.333333%; }
    .col-lg-9 { flex: 0 0 37.5%; }
    .col-lg-10 { flex: 0 0 41.666667%; }
    .col-lg-11 { flex: 0 0 45.833333%; }
    .col-lg-12 { flex: 0 0 50%; }
    .col-lg-13 { flex: 0 0 54.166667%; }
    .col-lg-14 { flex: 0 0 58.333333%; }
    .col-lg-15 { flex: 0 0 62.5%; }
    .col-lg-16 { flex: 0 0 66.666667%; }
    .col-lg-17 { flex: 0 0 70.833333%; }
    .col-lg-18 { flex: 0 0 75%; }
    .col-lg-19 { flex: 0 0 79.166667%; }
    .col-lg-20 { flex: 0 0 83.333333%; }
    .col-lg-21 { flex: 0 0 87.5%; }
    .col-lg-22 { flex: 0 0 91.666667%; }
    .col-lg-23 { flex: 0 0 95.833333%; }
    .col-lg-24 { flex: 0 0 100%; }
  }

  /* xl */
  @media screen and (min-width: 1920px) {
    .col-xl-1 { flex: 0 0 4.1666667%; }
    .col-xl-2 { flex: 0 0 8.333333%; }
    .col-xl-3 { flex: 0 0 12.5%; }
    .col-xl-4 { flex: 0 0 16.666667%; }
    .col-xl-5 { flex: 0 0 20.833333%; }
    .col-xl-6 { flex: 0 0 25%; }
    .col-xl-7 { flex: 0 0 29.166667%; }
    .col-xl-8 { flex: 0 0 33.333333%; }
    .col-xl-9 { flex: 0 0 37.5%; }
    .col-xl-10 { flex: 0 0 41.666667%; }
    .col-xl-11 { flex: 0 0 45.833333%; }
    .col-xl-12 { flex: 0 0 50%; }
    .col-xl-13 { flex: 0 0 54.166667%; }
    .col-xl-14 { flex: 0 0 58.333333%; }
    .col-xl-15 { flex: 0 0 62.5%; }
    .col-xl-16 { flex: 0 0 66.666667%; }
    .col-xl-17 { flex: 0 0 70.833333%; }
    .col-xl-18 { flex: 0 0 75%; }
    .col-xl-19 { flex: 0 0 79.166667%; }
    .col-xl-20 { flex: 0 0 83.333333%; }
    .col-xl-21 { flex: 0 0 87.5%; }
    .col-xl-22 { flex: 0 0 91.666667%; }
    .col-xl-23 { flex: 0 0 95.833333%; }
    .col-xl-24 { flex: 0 0 100%; }
  }
`;
//# sourceMappingURL=nyt-comps-map.css.js.map