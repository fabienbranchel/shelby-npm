"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
class ExternalComponent extends react_1.PureComponent {
    render() {
        return react_1.default.createElement("div", { className: "ExternalComponent" }, "External Component");
    }
}
// export default ExternalComponent;
exports.default = react_redux_1.connect()(ExternalComponent);
