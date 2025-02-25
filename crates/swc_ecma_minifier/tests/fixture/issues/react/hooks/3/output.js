"use strict";
__webpack_require__.d(__webpack_exports__, {
    Z: function() {
        return EnvironmentsSelector;
    }
});
var router = __webpack_require__(86677), index_esm = __webpack_require__(45205), use_team = __webpack_require__(502), fetch_api = __webpack_require__(78869), authenticate = __webpack_require__(16966), api_endpoints = __webpack_require__(96236), qs = __webpack_require__(70326), use_project = __webpack_require__(76246);
export function EnvironmentsSelector() {
    var projectName = (0, router.useRouter)().query.project, ref = (0, use_project.useProject)(projectName), projectInfo = ref.data, ref1 = (0, use_team.ZP)();
    ref1.teamSlug;
    var projectId, token, team, teamId, projectId1 = null == projectInfo ? void 0 : projectInfo.id, ref2 = (projectId = projectId1, token = (0, authenticate.LP)(), team = (0, use_team.ZP)().team, teamId = null == team ? void 0 : team.id, (0, index_esm.ZP)(projectId ? "".concat(api_endpoints.Ms, "/git-branches").concat((0, qs.c)({
        projectId: projectId,
        teamId: teamId
    })) : "", function(endpoint) {
        return (0, fetch_api.Z)(endpoint, token, {
            throwOnHTTPError: !0
        });
    }, void 0));
    return ref2.data, {};
}
