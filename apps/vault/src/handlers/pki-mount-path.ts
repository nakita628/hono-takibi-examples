import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePkiMountPathEabKeyIdRoute,
  deletePkiMountPathIssuerIssuerRefRoute,
  deletePkiMountPathKeyKeyRefRoute,
  deletePkiMountPathRolesNameRoute,
  deletePkiMountPathRootRoute,
  getPkiMountPathAcmeDirectoryRoute,
  getPkiMountPathAcmeNewNonceRoute,
  getPkiMountPathCaChainRoute,
  getPkiMountPathCaPemRoute,
  getPkiMountPathCaRoute,
  getPkiMountPathCertCaChainRoute,
  getPkiMountPathCertCrlRoute,
  getPkiMountPathCertDeltaCrlRoute,
  getPkiMountPathCertSerialRawPemRoute,
  getPkiMountPathCertSerialRawRoute,
  getPkiMountPathCertSerialRoute,
  getPkiMountPathCertsIndexRoute,
  getPkiMountPathCertsRevokedIndexRoute,
  getPkiMountPathConfigAcmeRoute,
  getPkiMountPathConfigAutoTidyRoute,
  getPkiMountPathConfigClusterRoute,
  getPkiMountPathConfigCrlRoute,
  getPkiMountPathConfigIssuersRoute,
  getPkiMountPathConfigKeysRoute,
  getPkiMountPathConfigUrlsRoute,
  getPkiMountPathCrlDeltaPemRoute,
  getPkiMountPathCrlDeltaRoute,
  getPkiMountPathCrlPemRoute,
  getPkiMountPathCrlRotateDeltaRoute,
  getPkiMountPathCrlRotateRoute,
  getPkiMountPathCrlRoute,
  getPkiMountPathEabIndexRoute,
  getPkiMountPathIssuerIssuerRefAcmeDirectoryRoute,
  getPkiMountPathIssuerIssuerRefAcmeNewNonceRoute,
  getPkiMountPathIssuerIssuerRefCrlDeltaDerRoute,
  getPkiMountPathIssuerIssuerRefCrlDeltaPemRoute,
  getPkiMountPathIssuerIssuerRefCrlDeltaRoute,
  getPkiMountPathIssuerIssuerRefCrlDerRoute,
  getPkiMountPathIssuerIssuerRefCrlPemRoute,
  getPkiMountPathIssuerIssuerRefCrlRoute,
  getPkiMountPathIssuerIssuerRefDerRoute,
  getPkiMountPathIssuerIssuerRefJsonRoute,
  getPkiMountPathIssuerIssuerRefPemRoute,
  getPkiMountPathIssuerIssuerRefRolesRoleAcmeDirectoryRoute,
  getPkiMountPathIssuerIssuerRefRolesRoleAcmeNewNonceRoute,
  getPkiMountPathIssuerIssuerRefRoute,
  getPkiMountPathIssuersIndexRoute,
  getPkiMountPathKeyKeyRefRoute,
  getPkiMountPathKeysIndexRoute,
  getPkiMountPathOcspReqRoute,
  getPkiMountPathRolesIndexRoute,
  getPkiMountPathRolesNameRoute,
  getPkiMountPathRolesRoleAcmeDirectoryRoute,
  getPkiMountPathRolesRoleAcmeNewNonceRoute,
  getPkiMountPathTidyStatusRoute,
  postPkiMountPathAcmeAccountKidRoute,
  postPkiMountPathAcmeAuthorizationAuthIdRoute,
  postPkiMountPathAcmeChallengeAuthIdChallengeTypeRoute,
  postPkiMountPathAcmeNewAccountRoute,
  postPkiMountPathAcmeNewEabRoute,
  postPkiMountPathAcmeNewOrderRoute,
  postPkiMountPathAcmeOrderOrderIdCertRoute,
  postPkiMountPathAcmeOrderOrderIdFinalizeRoute,
  postPkiMountPathAcmeOrderOrderIdRoute,
  postPkiMountPathAcmeOrdersRoute,
  postPkiMountPathAcmeRevokeCertRoute,
  postPkiMountPathConfigAcmeRoute,
  postPkiMountPathConfigAutoTidyRoute,
  postPkiMountPathConfigCaRoute,
  postPkiMountPathConfigClusterRoute,
  postPkiMountPathConfigCrlRoute,
  postPkiMountPathConfigIssuersRoute,
  postPkiMountPathConfigKeysRoute,
  postPkiMountPathConfigUrlsRoute,
  postPkiMountPathIntermediateCrossSignRoute,
  postPkiMountPathIntermediateGenerateExportedRoute,
  postPkiMountPathIntermediateSetSignedRoute,
  postPkiMountPathIssuerIssuerRefAcmeAccountKidRoute,
  postPkiMountPathIssuerIssuerRefAcmeAuthorizationAuthIdRoute,
  postPkiMountPathIssuerIssuerRefAcmeChallengeAuthIdChallengeTypeRoute,
  postPkiMountPathIssuerIssuerRefAcmeNewAccountRoute,
  postPkiMountPathIssuerIssuerRefAcmeNewEabRoute,
  postPkiMountPathIssuerIssuerRefAcmeNewOrderRoute,
  postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdCertRoute,
  postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdFinalizeRoute,
  postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdRoute,
  postPkiMountPathIssuerIssuerRefAcmeOrdersRoute,
  postPkiMountPathIssuerIssuerRefAcmeRevokeCertRoute,
  postPkiMountPathIssuerIssuerRefIssueRoleRoute,
  postPkiMountPathIssuerIssuerRefResignCrlsRoute,
  postPkiMountPathIssuerIssuerRefRevokeRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeAccountKidRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeAuthorizationAuthIdRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewAccountRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewEabRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewOrderRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdCertRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrdersRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeRevokeCertRoute,
  postPkiMountPathIssuerIssuerRefRoute,
  postPkiMountPathIssuerIssuerRefSignIntermediateRoute,
  postPkiMountPathIssuerIssuerRefSignRevocationListRoute,
  postPkiMountPathIssuerIssuerRefSignRoleRoute,
  postPkiMountPathIssuerIssuerRefSignSelfIssuedRoute,
  postPkiMountPathIssuerIssuerRefSignVerbatimRoleRoute,
  postPkiMountPathIssuerIssuerRefSignVerbatimRoute,
  postPkiMountPathIssueRoleRoute,
  postPkiMountPathIssuersGenerateIntermediateExportedRoute,
  postPkiMountPathIssuersGenerateRootExportedRoute,
  postPkiMountPathIssuersImportBundleRoute,
  postPkiMountPathIssuersImportCertRoute,
  postPkiMountPathKeyKeyRefRoute,
  postPkiMountPathKeysGenerateExportedRoute,
  postPkiMountPathKeysGenerateInternalRoute,
  postPkiMountPathKeysGenerateKmsRoute,
  postPkiMountPathKeysImportRoute,
  postPkiMountPathOcspRoute,
  postPkiMountPathRevokeRoute,
  postPkiMountPathRevokeWithKeyRoute,
  postPkiMountPathRolesNameRoute,
  postPkiMountPathRolesRoleAcmeAccountKidRoute,
  postPkiMountPathRolesRoleAcmeAuthorizationAuthIdRoute,
  postPkiMountPathRolesRoleAcmeChallengeAuthIdChallengeTypeRoute,
  postPkiMountPathRolesRoleAcmeNewAccountRoute,
  postPkiMountPathRolesRoleAcmeNewEabRoute,
  postPkiMountPathRolesRoleAcmeNewOrderRoute,
  postPkiMountPathRolesRoleAcmeOrderOrderIdCertRoute,
  postPkiMountPathRolesRoleAcmeOrderOrderIdFinalizeRoute,
  postPkiMountPathRolesRoleAcmeOrderOrderIdRoute,
  postPkiMountPathRolesRoleAcmeOrdersRoute,
  postPkiMountPathRolesRoleAcmeRevokeCertRoute,
  postPkiMountPathRootGenerateExportedRoute,
  postPkiMountPathRootReplaceRoute,
  postPkiMountPathRootRotateExportedRoute,
  postPkiMountPathRootSignIntermediateRoute,
  postPkiMountPathRootSignSelfIssuedRoute,
  postPkiMountPathSignRoleRoute,
  postPkiMountPathSignVerbatimRoleRoute,
  postPkiMountPathSignVerbatimRoute,
  postPkiMountPathTidyCancelRoute,
  postPkiMountPathTidyRoute,
} from '../routes'

export const postPkiMountPathAcmeAccountKidRouteHandler: RouteHandler<
  typeof postPkiMountPathAcmeAccountKidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathAcmeAuthorizationAuthIdRouteHandler: RouteHandler<
  typeof postPkiMountPathAcmeAuthorizationAuthIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathAcmeChallengeAuthIdChallengeTypeRouteHandler: RouteHandler<
  typeof postPkiMountPathAcmeChallengeAuthIdChallengeTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathAcmeDirectoryRouteHandler: RouteHandler<
  typeof getPkiMountPathAcmeDirectoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathAcmeNewAccountRouteHandler: RouteHandler<
  typeof postPkiMountPathAcmeNewAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathAcmeNewEabRouteHandler: RouteHandler<
  typeof postPkiMountPathAcmeNewEabRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathAcmeNewNonceRouteHandler: RouteHandler<
  typeof getPkiMountPathAcmeNewNonceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathAcmeNewOrderRouteHandler: RouteHandler<
  typeof postPkiMountPathAcmeNewOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathAcmeOrderOrderIdRouteHandler: RouteHandler<
  typeof postPkiMountPathAcmeOrderOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathAcmeOrderOrderIdCertRouteHandler: RouteHandler<
  typeof postPkiMountPathAcmeOrderOrderIdCertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathAcmeOrderOrderIdFinalizeRouteHandler: RouteHandler<
  typeof postPkiMountPathAcmeOrderOrderIdFinalizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathAcmeOrdersRouteHandler: RouteHandler<
  typeof postPkiMountPathAcmeOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathAcmeRevokeCertRouteHandler: RouteHandler<
  typeof postPkiMountPathAcmeRevokeCertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathCaRouteHandler: RouteHandler<typeof getPkiMountPathCaRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathCaPemRouteHandler: RouteHandler<
  typeof getPkiMountPathCaPemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathCaChainRouteHandler: RouteHandler<
  typeof getPkiMountPathCaChainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathCertCaChainRouteHandler: RouteHandler<
  typeof getPkiMountPathCertCaChainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathCertCrlRouteHandler: RouteHandler<
  typeof getPkiMountPathCertCrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathCertDeltaCrlRouteHandler: RouteHandler<
  typeof getPkiMountPathCertDeltaCrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathCertSerialRouteHandler: RouteHandler<
  typeof getPkiMountPathCertSerialRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathCertSerialRawRouteHandler: RouteHandler<
  typeof getPkiMountPathCertSerialRawRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathCertSerialRawPemRouteHandler: RouteHandler<
  typeof getPkiMountPathCertSerialRawPemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathCertsIndexRouteHandler: RouteHandler<
  typeof getPkiMountPathCertsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathCertsRevokedIndexRouteHandler: RouteHandler<
  typeof getPkiMountPathCertsRevokedIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathConfigAcmeRouteHandler: RouteHandler<
  typeof getPkiMountPathConfigAcmeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathConfigAcmeRouteHandler: RouteHandler<
  typeof postPkiMountPathConfigAcmeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathConfigAutoTidyRouteHandler: RouteHandler<
  typeof getPkiMountPathConfigAutoTidyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathConfigAutoTidyRouteHandler: RouteHandler<
  typeof postPkiMountPathConfigAutoTidyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathConfigCaRouteHandler: RouteHandler<
  typeof postPkiMountPathConfigCaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathConfigClusterRouteHandler: RouteHandler<
  typeof getPkiMountPathConfigClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathConfigClusterRouteHandler: RouteHandler<
  typeof postPkiMountPathConfigClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathConfigCrlRouteHandler: RouteHandler<
  typeof getPkiMountPathConfigCrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathConfigCrlRouteHandler: RouteHandler<
  typeof postPkiMountPathConfigCrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathConfigIssuersRouteHandler: RouteHandler<
  typeof getPkiMountPathConfigIssuersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathConfigIssuersRouteHandler: RouteHandler<
  typeof postPkiMountPathConfigIssuersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathConfigKeysRouteHandler: RouteHandler<
  typeof getPkiMountPathConfigKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathConfigKeysRouteHandler: RouteHandler<
  typeof postPkiMountPathConfigKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathConfigUrlsRouteHandler: RouteHandler<
  typeof getPkiMountPathConfigUrlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathConfigUrlsRouteHandler: RouteHandler<
  typeof postPkiMountPathConfigUrlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathCrlRouteHandler: RouteHandler<typeof getPkiMountPathCrlRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathCrlDeltaRouteHandler: RouteHandler<
  typeof getPkiMountPathCrlDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathCrlDeltaPemRouteHandler: RouteHandler<
  typeof getPkiMountPathCrlDeltaPemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathCrlPemRouteHandler: RouteHandler<
  typeof getPkiMountPathCrlPemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathCrlRotateRouteHandler: RouteHandler<
  typeof getPkiMountPathCrlRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathCrlRotateDeltaRouteHandler: RouteHandler<
  typeof getPkiMountPathCrlRotateDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathEabIndexRouteHandler: RouteHandler<
  typeof getPkiMountPathEabIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePkiMountPathEabKeyIdRouteHandler: RouteHandler<
  typeof deletePkiMountPathEabKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIntermediateCrossSignRouteHandler: RouteHandler<
  typeof postPkiMountPathIntermediateCrossSignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIntermediateGenerateExportedRouteHandler: RouteHandler<
  typeof postPkiMountPathIntermediateGenerateExportedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIntermediateSetSignedRouteHandler: RouteHandler<
  typeof postPkiMountPathIntermediateSetSignedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssueRoleRouteHandler: RouteHandler<
  typeof postPkiMountPathIssueRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathIssuerIssuerRefRouteHandler: RouteHandler<
  typeof getPkiMountPathIssuerIssuerRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePkiMountPathIssuerIssuerRefRouteHandler: RouteHandler<
  typeof deletePkiMountPathIssuerIssuerRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefAcmeAccountKidRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefAcmeAccountKidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefAcmeAuthorizationAuthIdRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefAcmeAuthorizationAuthIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefAcmeChallengeAuthIdChallengeTypeRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefAcmeChallengeAuthIdChallengeTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathIssuerIssuerRefAcmeDirectoryRouteHandler: RouteHandler<
  typeof getPkiMountPathIssuerIssuerRefAcmeDirectoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefAcmeNewAccountRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefAcmeNewAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefAcmeNewEabRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefAcmeNewEabRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathIssuerIssuerRefAcmeNewNonceRouteHandler: RouteHandler<
  typeof getPkiMountPathIssuerIssuerRefAcmeNewNonceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefAcmeNewOrderRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefAcmeNewOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdCertRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdCertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdFinalizeRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdFinalizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefAcmeOrdersRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefAcmeOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefAcmeRevokeCertRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefAcmeRevokeCertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathIssuerIssuerRefCrlRouteHandler: RouteHandler<
  typeof getPkiMountPathIssuerIssuerRefCrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathIssuerIssuerRefCrlDeltaRouteHandler: RouteHandler<
  typeof getPkiMountPathIssuerIssuerRefCrlDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathIssuerIssuerRefCrlDeltaDerRouteHandler: RouteHandler<
  typeof getPkiMountPathIssuerIssuerRefCrlDeltaDerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathIssuerIssuerRefCrlDeltaPemRouteHandler: RouteHandler<
  typeof getPkiMountPathIssuerIssuerRefCrlDeltaPemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathIssuerIssuerRefCrlDerRouteHandler: RouteHandler<
  typeof getPkiMountPathIssuerIssuerRefCrlDerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathIssuerIssuerRefCrlPemRouteHandler: RouteHandler<
  typeof getPkiMountPathIssuerIssuerRefCrlPemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathIssuerIssuerRefDerRouteHandler: RouteHandler<
  typeof getPkiMountPathIssuerIssuerRefDerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefIssueRoleRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefIssueRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathIssuerIssuerRefJsonRouteHandler: RouteHandler<
  typeof getPkiMountPathIssuerIssuerRefJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathIssuerIssuerRefPemRouteHandler: RouteHandler<
  typeof getPkiMountPathIssuerIssuerRefPemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefResignCrlsRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefResignCrlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefRevokeRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefRolesRoleAcmeAccountKidRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefRolesRoleAcmeAccountKidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefRolesRoleAcmeAuthorizationAuthIdRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefRolesRoleAcmeAuthorizationAuthIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathIssuerIssuerRefRolesRoleAcmeDirectoryRouteHandler: RouteHandler<
  typeof getPkiMountPathIssuerIssuerRefRolesRoleAcmeDirectoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewAccountRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewEabRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewEabRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathIssuerIssuerRefRolesRoleAcmeNewNonceRouteHandler: RouteHandler<
  typeof getPkiMountPathIssuerIssuerRefRolesRoleAcmeNewNonceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewOrderRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdCertRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdCertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrdersRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefRolesRoleAcmeRevokeCertRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefRolesRoleAcmeRevokeCertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefSignIntermediateRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefSignIntermediateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefSignRevocationListRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefSignRevocationListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefSignSelfIssuedRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefSignSelfIssuedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefSignVerbatimRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefSignVerbatimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefSignVerbatimRoleRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefSignVerbatimRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuerIssuerRefSignRoleRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuerIssuerRefSignRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathIssuersIndexRouteHandler: RouteHandler<
  typeof getPkiMountPathIssuersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuersGenerateIntermediateExportedRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuersGenerateIntermediateExportedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuersGenerateRootExportedRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuersGenerateRootExportedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuersImportBundleRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuersImportBundleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathIssuersImportCertRouteHandler: RouteHandler<
  typeof postPkiMountPathIssuersImportCertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathKeyKeyRefRouteHandler: RouteHandler<
  typeof getPkiMountPathKeyKeyRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathKeyKeyRefRouteHandler: RouteHandler<
  typeof postPkiMountPathKeyKeyRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePkiMountPathKeyKeyRefRouteHandler: RouteHandler<
  typeof deletePkiMountPathKeyKeyRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathKeysIndexRouteHandler: RouteHandler<
  typeof getPkiMountPathKeysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathKeysGenerateExportedRouteHandler: RouteHandler<
  typeof postPkiMountPathKeysGenerateExportedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathKeysGenerateInternalRouteHandler: RouteHandler<
  typeof postPkiMountPathKeysGenerateInternalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathKeysGenerateKmsRouteHandler: RouteHandler<
  typeof postPkiMountPathKeysGenerateKmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathKeysImportRouteHandler: RouteHandler<
  typeof postPkiMountPathKeysImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathOcspRouteHandler: RouteHandler<
  typeof postPkiMountPathOcspRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathOcspReqRouteHandler: RouteHandler<
  typeof getPkiMountPathOcspReqRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRevokeRouteHandler: RouteHandler<
  typeof postPkiMountPathRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRevokeWithKeyRouteHandler: RouteHandler<
  typeof postPkiMountPathRevokeWithKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathRolesIndexRouteHandler: RouteHandler<
  typeof getPkiMountPathRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathRolesNameRouteHandler: RouteHandler<
  typeof getPkiMountPathRolesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRolesNameRouteHandler: RouteHandler<
  typeof postPkiMountPathRolesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePkiMountPathRolesNameRouteHandler: RouteHandler<
  typeof deletePkiMountPathRolesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRolesRoleAcmeAccountKidRouteHandler: RouteHandler<
  typeof postPkiMountPathRolesRoleAcmeAccountKidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRolesRoleAcmeAuthorizationAuthIdRouteHandler: RouteHandler<
  typeof postPkiMountPathRolesRoleAcmeAuthorizationAuthIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRolesRoleAcmeChallengeAuthIdChallengeTypeRouteHandler: RouteHandler<
  typeof postPkiMountPathRolesRoleAcmeChallengeAuthIdChallengeTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathRolesRoleAcmeDirectoryRouteHandler: RouteHandler<
  typeof getPkiMountPathRolesRoleAcmeDirectoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRolesRoleAcmeNewAccountRouteHandler: RouteHandler<
  typeof postPkiMountPathRolesRoleAcmeNewAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRolesRoleAcmeNewEabRouteHandler: RouteHandler<
  typeof postPkiMountPathRolesRoleAcmeNewEabRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathRolesRoleAcmeNewNonceRouteHandler: RouteHandler<
  typeof getPkiMountPathRolesRoleAcmeNewNonceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRolesRoleAcmeNewOrderRouteHandler: RouteHandler<
  typeof postPkiMountPathRolesRoleAcmeNewOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRolesRoleAcmeOrderOrderIdRouteHandler: RouteHandler<
  typeof postPkiMountPathRolesRoleAcmeOrderOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRolesRoleAcmeOrderOrderIdCertRouteHandler: RouteHandler<
  typeof postPkiMountPathRolesRoleAcmeOrderOrderIdCertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRolesRoleAcmeOrderOrderIdFinalizeRouteHandler: RouteHandler<
  typeof postPkiMountPathRolesRoleAcmeOrderOrderIdFinalizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRolesRoleAcmeOrdersRouteHandler: RouteHandler<
  typeof postPkiMountPathRolesRoleAcmeOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRolesRoleAcmeRevokeCertRouteHandler: RouteHandler<
  typeof postPkiMountPathRolesRoleAcmeRevokeCertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePkiMountPathRootRouteHandler: RouteHandler<
  typeof deletePkiMountPathRootRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRootGenerateExportedRouteHandler: RouteHandler<
  typeof postPkiMountPathRootGenerateExportedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRootReplaceRouteHandler: RouteHandler<
  typeof postPkiMountPathRootReplaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRootRotateExportedRouteHandler: RouteHandler<
  typeof postPkiMountPathRootRotateExportedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRootSignIntermediateRouteHandler: RouteHandler<
  typeof postPkiMountPathRootSignIntermediateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathRootSignSelfIssuedRouteHandler: RouteHandler<
  typeof postPkiMountPathRootSignSelfIssuedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathSignVerbatimRouteHandler: RouteHandler<
  typeof postPkiMountPathSignVerbatimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathSignVerbatimRoleRouteHandler: RouteHandler<
  typeof postPkiMountPathSignVerbatimRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathSignRoleRouteHandler: RouteHandler<
  typeof postPkiMountPathSignRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathTidyRouteHandler: RouteHandler<
  typeof postPkiMountPathTidyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPkiMountPathTidyCancelRouteHandler: RouteHandler<
  typeof postPkiMountPathTidyCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPkiMountPathTidyStatusRouteHandler: RouteHandler<
  typeof getPkiMountPathTidyStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
