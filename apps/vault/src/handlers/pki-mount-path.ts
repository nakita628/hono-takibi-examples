import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const pkiMountPathHandler = app
  .openapi(postPkiMountPathAcmeAccountKidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathAcmeAuthorizationAuthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathAcmeChallengeAuthIdChallengeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathAcmeDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathAcmeNewAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathAcmeNewEabRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathAcmeNewNonceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathAcmeNewOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathAcmeOrderOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathAcmeOrderOrderIdCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathAcmeOrderOrderIdFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathAcmeOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathAcmeRevokeCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathCaPemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathCaChainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathCertCaChainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathCertCrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathCertDeltaCrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathCertSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathCertSerialRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathCertSerialRawPemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathCertsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathCertsRevokedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathConfigAcmeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathConfigAcmeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathConfigAutoTidyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathConfigAutoTidyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathConfigCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathConfigClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathConfigClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathConfigCrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathConfigCrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathConfigIssuersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathConfigIssuersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathConfigKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathConfigKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathConfigUrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathConfigUrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathCrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathCrlDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathCrlDeltaPemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathCrlPemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathCrlRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathCrlRotateDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathEabIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePkiMountPathEabKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIntermediateCrossSignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIntermediateGenerateExportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIntermediateSetSignedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssueRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathIssuerIssuerRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePkiMountPathIssuerIssuerRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefAcmeAccountKidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefAcmeAuthorizationAuthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefAcmeChallengeAuthIdChallengeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathIssuerIssuerRefAcmeDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefAcmeNewAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefAcmeNewEabRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathIssuerIssuerRefAcmeNewNonceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefAcmeNewOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefAcmeOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefAcmeRevokeCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathIssuerIssuerRefCrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathIssuerIssuerRefCrlDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathIssuerIssuerRefCrlDeltaDerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathIssuerIssuerRefCrlDeltaPemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathIssuerIssuerRefCrlDerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathIssuerIssuerRefCrlPemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathIssuerIssuerRefDerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefIssueRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathIssuerIssuerRefJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathIssuerIssuerRefPemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefResignCrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefRolesRoleAcmeAccountKidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefRolesRoleAcmeAuthorizationAuthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathIssuerIssuerRefRolesRoleAcmeDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewEabRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathIssuerIssuerRefRolesRoleAcmeNewNonceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefRolesRoleAcmeRevokeCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefSignIntermediateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefSignRevocationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefSignSelfIssuedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefSignVerbatimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefSignVerbatimRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuerIssuerRefSignRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathIssuersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuersGenerateIntermediateExportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuersGenerateRootExportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuersImportBundleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathIssuersImportCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathKeyKeyRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathKeyKeyRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePkiMountPathKeyKeyRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathKeysGenerateExportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathKeysGenerateInternalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathKeysGenerateKmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathKeysImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathOcspRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathOcspReqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRevokeWithKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePkiMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRolesRoleAcmeAccountKidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRolesRoleAcmeAuthorizationAuthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRolesRoleAcmeChallengeAuthIdChallengeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathRolesRoleAcmeDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRolesRoleAcmeNewAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRolesRoleAcmeNewEabRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathRolesRoleAcmeNewNonceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRolesRoleAcmeNewOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRolesRoleAcmeOrderOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRolesRoleAcmeOrderOrderIdCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRolesRoleAcmeOrderOrderIdFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRolesRoleAcmeOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRolesRoleAcmeRevokeCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePkiMountPathRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRootGenerateExportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRootReplaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRootRotateExportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRootSignIntermediateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathRootSignSelfIssuedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathSignVerbatimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathSignVerbatimRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathSignRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathTidyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPkiMountPathTidyCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPkiMountPathTidyStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
