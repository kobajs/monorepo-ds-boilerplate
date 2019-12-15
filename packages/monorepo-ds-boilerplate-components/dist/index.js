import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import Tokens from 'monorepo-ds-boilerplate-tokens';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var StyledButton = styled.button(function (_a) {
  var theme = _a.theme,
      size = _a.size,
      color = _a.color;
  return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: ", "px;\n    color: ", ";\n    background-color: ", ";\n  "], ["\n    padding: ", "px;\n    color: ", ";\n    background-color: ", ";\n  "])), theme.spacing[size], theme.palette.common.white, theme.palette[color].main);
});
var templateObject_1;

var Button = function (props) {
  var children = props.children,
      styledButtonProps = __rest(props, ["children"]);

  return React.createElement(StyledButton, styledButtonProps, children);
};

Button.defaultProps = {
  color: 'secondary',
  size: 'medium'
};

var defaultTheme = Tokens;

var SCThemeProvider = function (props) {
  var children = props.children,
      theme = props.theme;
  return React.createElement(ThemeProvider, {
    theme: theme
  }, children);
};

SCThemeProvider.defaultProps = {
  theme: defaultTheme
};

export { Button, SCThemeProvider };
