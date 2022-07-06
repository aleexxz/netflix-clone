"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getServerSideProps = void 0;
var head_1 = require("next/head");
var Header_1 = require("../components/Header");
var Banner_1 = require("../components/Banner");
var requests_1 = require("../utils/requests");
var Home = function (_a) {
    var netflixOriginals = _a.netflixOriginals, actionMovies = _a.actionMovies, comedyMovies = _a.comedyMovies, documentaries = _a.documentaries, horrorMovies = _a.horrorMovies, romanceMovies = _a.romanceMovies, topRated = _a.topRated, trendingNow = _a.trendingNow;
    // console.log(netflixOriginals)
    return (React.createElement("div", { className: "relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]" },
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Home - Netflix"),
            React.createElement("link", { rel: "icon", href: "/favicon.ico" })),
        React.createElement(Header_1["default"], null),
        React.createElement("main", null,
            React.createElement(Banner_1["default"], { netflixOriginals: netflixOriginals }),
            React.createElement("section", null))));
};
exports["default"] = Home;
function getServerSideProps() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, netflixOriginals, trendingNow, topRated, actionMovies, comedyMovies, horrorMovies, romanceMovies, documentaries;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        fetch(requests_1["default"].fetchNetflixOriginals).then(function (res) { return res.json(); }),
                        fetch(requests_1["default"].fetchTrending).then(function (res) { return res.json(); }),
                        fetch(requests_1["default"].fetchTopRated).then(function (res) { return res.json(); }),
                        fetch(requests_1["default"].fetchActionMovies).then(function (res) { return res.json(); }),
                        fetch(requests_1["default"].fetchComedyMovies).then(function (res) { return res.json(); }),
                        fetch(requests_1["default"].fetchHorrorMovies).then(function (res) { return res.json(); }),
                        fetch(requests_1["default"].fetchRomanceMovies).then(function (res) { return res.json(); }),
                        fetch(requests_1["default"].fetchDocumentaries).then(function (res) { return res.json(); }),
                    ])];
                case 1:
                    _a = _b.sent(), netflixOriginals = _a[0], trendingNow = _a[1], topRated = _a[2], actionMovies = _a[3], comedyMovies = _a[4], horrorMovies = _a[5], romanceMovies = _a[6], documentaries = _a[7];
                    return [2 /*return*/, {
                            props: {
                                netflixOriginals: netflixOriginals.results,
                                trendingNow: trendingNow.results,
                                topRated: topRated.results,
                                actionMovies: actionMovies.results,
                                comedyMovies: comedyMovies.results,
                                horrorMovies: horrorMovies.results,
                                romanceMovies: romanceMovies.results,
                                documentaries: documentaries.results
                            }
                        }];
            }
        });
    });
}
exports.getServerSideProps = getServerSideProps;
