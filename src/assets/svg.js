import * as React from 'react';
import Svg, {Image, G, TSpan, Path, Text, Ellipse} from 'react-native-svg';

export const FlyIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width ? props.width : 48}
    height={props.height ? props.height : 48}
    viewBox="0 0 49 48"
    {...props}>
    <Image
      width={49}
      height={48}
      xlinkHref="data:image/png;base64,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"
    />
  </Svg>
);

export const MapIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width ? props.width : 48}
    height={props.height ? props.height : 48}
    viewBox="0 0 48 48"
    {...props}>
    <Image
      width={48}
      height={48}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPbSURBVHgB7VlNctowFH6ySbNMeoLSG9ATJF12AgkmSWe66uQEISeIOUHCCWhXXTTE/KVdhp4g6QnKDUp3bYilvmdbYIzBsmtiZso340EIWdKn90n2+wBYI1swWAE0LGt7W984p/LQHtVODGOoem/mBD5ZX/ObGr8FEHm3hg3+cO31O+PNQOV+DTJEu/vldFOz77zJD91L5Kmu2elVVfrIJAJSMkKAN0k2YLjqVBK+aDAGl1GSikVADsyB5QXjH49KpRbERFAynIu6Do+m4U3SwjGEljNxaqfeFBdKSpnA5253V+daY6JVt3Ncpf5Ih/rbvb37qD5IMjbnJha38RoKDrVDo3gZ1rZp9apMg/NxW4Zt92fbRhJwVky3GyBgN6LpPUal/mBv9IOrNU8yRsRGtXDsKEktJBBYMWrdt21Ry0FuwGG0yzSNwlwI3icYa0mJRUkmClGSCiXgyEWwc9+qzw23Zd0UcJVwZbWdaXm5g2HdNihIJgpBSVUOis9nCMyG2mnRZ7Z+Yiicy1dWt6zr2nshRBkCRFQkE4XrTu9WLioScOaekz/KTYqD5+WgKJ+TY6PUB0UcGc6p1CLtSomhZL7pMFKWTFyMCeickU6dsqvTkXmccFBvpT94lzKsTu+Coo8nzlnYiROG3EwNSgZXUukpmDakdFEbB/ihRCDRqwTtFZIcrAASEdjSnt2R5JrtrgkZI+HLnHywsB3IGJm+jaaBJyFAewaWhKUToIfPlrbxU/X9Pi6WHwHvyekdjaljvQeyxppAyoj97pWDFQLDfAF0fDja+KmIlSJguMlOrIRnvQeyxtIJCC5qlN1xW9RhCUi6B8gDKuCkvkc1PDRKJn6YsCQkIsD4CG3AZ/kjoxhpZqmCLJxHwZlqKimRiICXoKcyeemEoIFQJZsB8+IXcSz2TDcxmV6U3fltHCpTHf2m0kdmBILWOppeZ3RBTIs9toQomdfQOwrzQFXgl4xb45peFa8v9JRa0g9lAi6iJKUcAQopJSeUzDOhNXCFfjQ7N9ZVt1uO04dfMuQ/Mf7wyu/YUZnqkIBz7EZJSikCrslrm5icTKWGDC1EJlj5un0TabOP+/D5pOg/hZ443iFRRT904PqhrqQ8320KY2/0ut0TXk2/sl90/i2ZZ/IKEINwD9TBlM2e1FqXCFrsEtIbDSXwyx4ZKiav3wOFOTY76riQ1FqfjBO02BcRcCxxZ/i8/K5i8i622f/NWpfwW+wLCEyQdMWmbfZ0rHUJKanKwd5L+h5OwPsnJo61Pm8wgN/DtK11kpTsM0gglVA/JSbHqLdJKymFeo3/BX8BdRCST4cYW/EAAAAASUVORK5CYII="
    />
  </Svg>
);

export const WalletIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width ? props.width : 48}
    height={props.height ? props.height : 48}
    viewBox="0 0 48 48"
    {...props}>
    <Image
      width={48}
      height={48}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL3SURBVHgB7ZldbtpAEIBn1vl79BG4QckNkseqiNbJU58abpCcIOkJ0p4g4alSq8ZAQDyWG4QbxEfwI4lsT2cN/gHz7zV2In8SYle7hpndmfXMDkBJviCk5JfZrxxq7h0QnMBmDF88zfhqfLQgBQJScii8f1sIL6n6z6Yk1Q78eXw80TyMC2HzT9rLn6JKvIceHhvGpyFsyR4oAy30XlkYY6kCpmnqJPal0lXZd8DTIQWpTSiAwGuuEl4i5xBQGxSxcAfueKX0o6Olq+OOHD1YAgLQzX6/Amvgvjp6YLtCo8qq5+zRyG4sWJyED/w2e9U9jW63dMzsQBi8uFpj9tSaUqDd7X5zXbiHIqPBxVmt1gy6oQL+eS7cJ24GZiO3zOIZK+06c8h3+FAufn8cBzsR+sC+cG5YH38SIrbYUBvrOOUuMHlxQfNuiegLd3WW9ZK/5Sc6hQTgh0nTBldcFUV4iSFXmxcUxlbBsorPwVj8GPXPZTaZoZHy9Z4FkwW1xr3oZajsPbAT5vjj21JgDqUCeVMqkDdvXoFkNMpB3EO79wxFhCgRHS8Ip6ezpiLzDk2I4+6zeu0UNsTsdC+J4Fa2Cb3Geb1+v3gcrs7rtR+wIQ+dbuICQdkOeDH79Fy0ZscdpChxn2PL26JMAYHRbYTQsJoYd2J+hags0lXnA67WCppIcC0TpKAv2yi06/BPY3PTouxaRYbgbKODiY3qnN09/+30WrxCNpHrJyJyHidL9yrDdYX3QiwcJ93k37aNzQU5g6LpGZyYiO+gEKXHqFxZ9ASfYNRMDPLpJsdUJ0tKd0AyEfCC89gbFxzfmTVwBlmlqMoVCJgoYkHGlNFo3pQK5E2pQN68QwUIlIW6uyCmQBjDV+KRZFHwZYqSmTC3CBWQNa5JU0aSZpGUMHu96oFwonAdMVQgLHCMq4cHTzMJ/Rpl06zxs7eYWaMVDwqnSkwm18dIgFngWwmb68qn8brylBPLgSgcTua1+SFloZ/IpaU0RfGSLPgPzzUeBxlD0JAAAAAASUVORK5CYII="
    />
  </Svg>
);

export const SearchIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width ? props.width : 48}
    height={props.height ? props.height : 48}
    viewBox="0 0 75 75"
    {...props}>
    <Image
      width={75}
      height={75}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATqSURBVHgB7ZtNUhtHFMffeyPIJmXrBlFOYHGCmGUKCzTGcVVWhhNYOYHhBIETIFapinEGUFwsrZwg8g0mN1CySuGZbr8nGduFp0fz0T1yif6tpGlVa/Sf193vSwAej8fj8Xg8Ho/H47nrICyBkyhqf9tqdUnrDmjsfBxAnGrUsSKKn25tTeArozGxXo5GD1FBn4B2AFikxUz57iYa1Ol1ujb+OfwxhiXjVCyxoHvB2h5qeMZvu1ADRBz+n9LhMkVzJpZYUqDopKAVFWaZolkXS6ypHayfaK374AyMNaaHu9vbQ2gQq2L9Fl11viH1xrY1mUDCg7C3dQgNYU2s36PX3RZBVEKoCS+pidLqn88vEtIDrWV/KzaPRhjubj/ahwawIlZhi0IY61SdEqTnYRhO8z4asfia1IDl+2HRvE0JVlusIkJp0G+VgsFPYW8MJYl4fgXJHi+5F3mfa2JJ1hbr7GI0JMBnpnGl9PGTsDeAmohoesFDSZXerPJAilJLrFfRJT9xcQ8Mkyu1H4b2TqyIT1pNayyYyWfD+F91vbG/YIlXhaAGSIFxadgWSpB9DtW7TX5pCIV05x61aluxicpiiVWZloRW+tC2UDd8EgzjrHEEfC6+Hjigslhmq8J4N+wdgENEsJQt1zDcdmVdlcQ6G436JqtKFITQALONnF2RrDG2rh1wQDXL4uxB5nW++adhc6mVNNUmV6EbXV11wDKVxKKZo/glkk6BBsmzLvUutR6blhZLnFDTEvwvTc+hYThg/yvrOvt+D8AypcVqtZJO5gA/YVf+TR4cGYyzrnN8+RAsU1osSrKtCg1HuWtakJh8LuvuQ/k9i7CTdfl29qApcgLyr0CsO4wXqwTlxVI6zpwI6TtYApE5tLF+2JQWS7cw8yb4CK9VvalKwvVHw1AMliktVpC0TB5611UAmwcpo4tg/cApLVY4K0FluwlSI4SGQaDMxKNGZd1BrrjBq4usq5xJdBLAmpDapCmaIK5ig2UqiZUqyH5q7DW/jOQHNEOgjXn5SeigCFtJrHmeO3spBpxmbmLvmiUfDSENL8FjcEBlP8ucYdCddrD2AhwiwXxu8tFRpbqyWKSSI5N1cRA7iEavnQgmVptXepOyPjiiVnVH9qeA8I1xcsu1PLGodUrO0Zh+wfjxztb34Iha4c5879LG/YELFwfR5Z+/2tjD5OQTi8KcPBUq2gSH1I4NUSUHkJOekSV5n9b/fnUp1aDyiNAieKAwv+qNeB46bkOy0utQpFr84etmrUKLOvlu2ijnnYKzanchy3RdwrfWRVNcsI9fHYP0j2r9lm9iqlmQAOn+hxhT5qi0dF0KZrU/q7xgbnAlmJM2yT8uRuJWPAdn3OyR5ofiQjAnyb/HO70BKtwA+3n5qbQGoLremJ98OQeLnMSWfT3nrd2zTpuAMwP1qi0i0jFBcvR5zr3IsrdpYY31wc+a0oK0P8tMFBIOY+TyWpqqiwCSsakwMRcsjSCndZznOQq3H/0CNVnKPywEaYNMQLXpllUQBJxcvI7DEjXIxX1bdloplyaWbZoQbGXEElwLtlJiCS4FWzmxhCKCVWnWXcki6+LeU/7hVN6VWdmK9CLBNEHppruVXIa3OYtGQ6JPvfpK6dMnYW8PSnInxBJYsD4SdKWfy+UfCzwej8fj8Xg8Ho/Hs9q8B5lgOOkHtZoKAAAAAElFTkSuQmCC"
    />
  </Svg>
);
