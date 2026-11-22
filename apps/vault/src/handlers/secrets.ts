import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAlicloudMountPathConfigRoute,
  deleteAlicloudMountPathRoleNameRoute,
  deleteAwsMountPathRolesNameRoute,
  deleteAwsMountPathStaticRolesNameRoute,
  deleteAzureMountPathConfigRoute,
  deleteAzureMountPathRolesNameRoute,
  deleteConsulMountPathRolesNameRoute,
  deleteCubbyholePathRoute,
  deleteDatabaseMountPathConfigNameRoute,
  deleteDatabaseMountPathRolesNameRoute,
  deleteDatabaseMountPathStaticRolesNameRoute,
  deleteGcpkmsMountPathConfigRoute,
  deleteGcpkmsMountPathKeysDeregisterKeyRoute,
  deleteGcpkmsMountPathKeysKeyRoute,
  deleteGcpkmsMountPathKeysTrimKeyRoute,
  deleteGcpMountPathImpersonatedAccountNameRoute,
  deleteGcpMountPathRolesetNameRoute,
  deleteGcpMountPathStaticAccountNameRoute,
  deleteKubernetesMountPathConfigRoute,
  deleteKubernetesMountPathRolesNameRoute,
  deleteKvV1MountPathPathRoute,
  deleteKvV2MountPathDataPathRoute,
  deleteKvV2MountPathMetadataPathRoute,
  deleteLdapMountPathConfigRoute,
  deleteLdapMountPathLibraryNameRoute,
  deleteLdapMountPathRoleNameRoute,
  deleteLdapMountPathStaticRoleNameRoute,
  deleteMongodbatlasMountPathRolesNameRoute,
  deleteNomadMountPathConfigAccessRoute,
  deleteNomadMountPathConfigLeaseRoute,
  deleteNomadMountPathRoleNameRoute,
  deletePkiMountPathEabKeyIdRoute,
  deletePkiMountPathIssuerIssuerRefRoute,
  deletePkiMountPathKeyKeyRefRoute,
  deletePkiMountPathRolesNameRoute,
  deletePkiMountPathRootRoute,
  deleteRabbitmqMountPathRolesNameRoute,
  deleteSshMountPathConfigCaRoute,
  deleteSshMountPathConfigZeroaddressRoute,
  deleteSshMountPathRolesRoleRoute,
  deleteSshMountPathTidyDynamicKeysRoute,
  deleteTerraformMountPathConfigRoute,
  deleteTerraformMountPathRoleNameRoute,
  deleteTotpMountPathKeysNameRoute,
  deleteTransitMountPathKeysNameRoute,
  getAlicloudMountPathConfigRoute,
  getAlicloudMountPathCredsNameRoute,
  getAlicloudMountPathRoleIndexRoute,
  getAlicloudMountPathRoleNameRoute,
  getAwsMountPathConfigLeaseRoute,
  getAwsMountPathConfigRootRoute,
  getAwsMountPathCredsNameRoute,
  getAwsMountPathRolesIndexRoute,
  getAwsMountPathRolesNameRoute,
  getAwsMountPathStaticCredsNameRoute,
  getAwsMountPathStaticRolesNameRoute,
  getAwsMountPathStsNameRoute,
  getAzureMountPathConfigRoute,
  getAzureMountPathCredsRoleRoute,
  getAzureMountPathRolesIndexRoute,
  getAzureMountPathRolesNameRoute,
  getConsulMountPathConfigAccessRoute,
  getConsulMountPathCredsRoleRoute,
  getConsulMountPathRolesIndexRoute,
  getConsulMountPathRolesNameRoute,
  getCubbyholePathIndexRoute,
  getCubbyholePathRoute,
  getDatabaseMountPathConfigIndexRoute,
  getDatabaseMountPathConfigNameRoute,
  getDatabaseMountPathCredsNameRoute,
  getDatabaseMountPathRolesIndexRoute,
  getDatabaseMountPathRolesNameRoute,
  getDatabaseMountPathStaticCredsNameRoute,
  getDatabaseMountPathStaticRolesIndexRoute,
  getDatabaseMountPathStaticRolesNameRoute,
  getGcpkmsMountPathConfigRoute,
  getGcpkmsMountPathKeysConfigKeyRoute,
  getGcpkmsMountPathKeysIndexRoute,
  getGcpkmsMountPathKeysKeyRoute,
  getGcpkmsMountPathPubkeyKeyRoute,
  getGcpMountPathConfigRoute,
  getGcpMountPathImpersonatedAccountIndexRoute,
  getGcpMountPathImpersonatedAccountNameRoute,
  getGcpMountPathImpersonatedAccountNameTokenRoute,
  getGcpMountPathImpersonatedAccountsIndexRoute,
  getGcpMountPathKeyRolesetRoute,
  getGcpMountPathRolesetIndexRoute,
  getGcpMountPathRolesetNameRoute,
  getGcpMountPathRolesetRolesetKeyRoute,
  getGcpMountPathRolesetRolesetTokenRoute,
  getGcpMountPathRolesetsIndexRoute,
  getGcpMountPathStaticAccountIndexRoute,
  getGcpMountPathStaticAccountNameKeyRoute,
  getGcpMountPathStaticAccountNameRoute,
  getGcpMountPathStaticAccountNameTokenRoute,
  getGcpMountPathStaticAccountsIndexRoute,
  getGcpMountPathTokenRolesetRoute,
  getKubernetesMountPathCheckRoute,
  getKubernetesMountPathConfigRoute,
  getKubernetesMountPathRolesIndexRoute,
  getKubernetesMountPathRolesNameRoute,
  getKvV1MountPathPathIndexRoute,
  getKvV1MountPathPathRoute,
  getKvV2MountPathConfigRoute,
  getKvV2MountPathDataPathRoute,
  getKvV2MountPathMetadataPathIndexRoute,
  getKvV2MountPathMetadataPathRoute,
  getKvV2MountPathSubkeysPathRoute,
  getLdapMountPathConfigRoute,
  getLdapMountPathCredsNameRoute,
  getLdapMountPathLibraryIndexRoute,
  getLdapMountPathLibraryNameRoute,
  getLdapMountPathLibraryNameStatusRoute,
  getLdapMountPathRoleIndexRoute,
  getLdapMountPathRoleNameRoute,
  getLdapMountPathStaticCredNameRoute,
  getLdapMountPathStaticRoleIndexRoute,
  getLdapMountPathStaticRoleNameRoute,
  getMongodbatlasMountPathConfigRoute,
  getMongodbatlasMountPathCredsNameRoute,
  getMongodbatlasMountPathRolesIndexRoute,
  getMongodbatlasMountPathRolesNameRoute,
  getNomadMountPathConfigAccessRoute,
  getNomadMountPathConfigLeaseRoute,
  getNomadMountPathCredsNameRoute,
  getNomadMountPathRoleIndexRoute,
  getNomadMountPathRoleNameRoute,
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
  getRabbitmqMountPathConfigLeaseRoute,
  getRabbitmqMountPathCredsNameRoute,
  getRabbitmqMountPathRolesIndexRoute,
  getRabbitmqMountPathRolesNameRoute,
  getSshMountPathConfigCaRoute,
  getSshMountPathConfigZeroaddressRoute,
  getSshMountPathPublicKeyRoute,
  getSshMountPathRolesIndexRoute,
  getSshMountPathRolesRoleRoute,
  getTerraformMountPathConfigRoute,
  getTerraformMountPathCredsNameRoute,
  getTerraformMountPathRoleIndexRoute,
  getTerraformMountPathRoleNameRoute,
  getTotpMountPathCodeNameRoute,
  getTotpMountPathKeysIndexRoute,
  getTotpMountPathKeysNameRoute,
  getTransitMountPathBackupNameRoute,
  getTransitMountPathByokExportDestinationSourceRoute,
  getTransitMountPathByokExportDestinationSourceVersionRoute,
  getTransitMountPathCacheConfigRoute,
  getTransitMountPathConfigKeysRoute,
  getTransitMountPathExportTypeNameRoute,
  getTransitMountPathExportTypeNameVersionRoute,
  getTransitMountPathKeysIndexRoute,
  getTransitMountPathKeysNameRoute,
  getTransitMountPathWrappingKeyRoute,
  postAlicloudMountPathConfigRoute,
  postAlicloudMountPathRoleNameRoute,
  postAwsMountPathConfigLeaseRoute,
  postAwsMountPathConfigRootRoute,
  postAwsMountPathConfigRotateRootRoute,
  postAwsMountPathCredsNameRoute,
  postAwsMountPathRolesNameRoute,
  postAwsMountPathStaticRolesNameRoute,
  postAwsMountPathStsNameRoute,
  postAzureMountPathConfigRoute,
  postAzureMountPathRolesNameRoute,
  postAzureMountPathRotateRootRoute,
  postConsulMountPathConfigAccessRoute,
  postConsulMountPathRolesNameRoute,
  postCubbyholePathRoute,
  postDatabaseMountPathConfigNameRoute,
  postDatabaseMountPathResetNameRoute,
  postDatabaseMountPathRolesNameRoute,
  postDatabaseMountPathRotateRoleNameRoute,
  postDatabaseMountPathRotateRootNameRoute,
  postDatabaseMountPathStaticRolesNameRoute,
  postGcpkmsMountPathConfigRoute,
  postGcpkmsMountPathDecryptKeyRoute,
  postGcpkmsMountPathEncryptKeyRoute,
  postGcpkmsMountPathKeysConfigKeyRoute,
  postGcpkmsMountPathKeysDeregisterKeyRoute,
  postGcpkmsMountPathKeysKeyRoute,
  postGcpkmsMountPathKeysRegisterKeyRoute,
  postGcpkmsMountPathKeysRotateKeyRoute,
  postGcpkmsMountPathKeysTrimKeyRoute,
  postGcpkmsMountPathReencryptKeyRoute,
  postGcpkmsMountPathSignKeyRoute,
  postGcpkmsMountPathVerifyKeyRoute,
  postGcpMountPathConfigRotateRootRoute,
  postGcpMountPathConfigRoute,
  postGcpMountPathImpersonatedAccountNameRoute,
  postGcpMountPathImpersonatedAccountNameTokenRoute,
  postGcpMountPathKeyRolesetRoute,
  postGcpMountPathRolesetNameRotateKeyRoute,
  postGcpMountPathRolesetNameRotateRoute,
  postGcpMountPathRolesetNameRoute,
  postGcpMountPathRolesetRolesetKeyRoute,
  postGcpMountPathRolesetRolesetTokenRoute,
  postGcpMountPathStaticAccountNameKeyRoute,
  postGcpMountPathStaticAccountNameRotateKeyRoute,
  postGcpMountPathStaticAccountNameRoute,
  postGcpMountPathStaticAccountNameTokenRoute,
  postGcpMountPathTokenRolesetRoute,
  postKubernetesMountPathConfigRoute,
  postKubernetesMountPathCredsNameRoute,
  postKubernetesMountPathRolesNameRoute,
  postKvV1MountPathPathRoute,
  postKvV2MountPathConfigRoute,
  postKvV2MountPathDataPathRoute,
  postKvV2MountPathDeletePathRoute,
  postKvV2MountPathDestroyPathRoute,
  postKvV2MountPathMetadataPathRoute,
  postKvV2MountPathUndeletePathRoute,
  postLdapMountPathConfigRoute,
  postLdapMountPathLibraryManageNameCheckInRoute,
  postLdapMountPathLibraryNameCheckInRoute,
  postLdapMountPathLibraryNameCheckOutRoute,
  postLdapMountPathLibraryNameRoute,
  postLdapMountPathRoleNameRoute,
  postLdapMountPathRotateRoleNameRoute,
  postLdapMountPathRotateRootRoute,
  postLdapMountPathStaticRoleNameRoute,
  postMongodbatlasMountPathConfigRoute,
  postMongodbatlasMountPathCredsNameRoute,
  postMongodbatlasMountPathRolesNameRoute,
  postNomadMountPathConfigAccessRoute,
  postNomadMountPathConfigLeaseRoute,
  postNomadMountPathRoleNameRoute,
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
  postRabbitmqMountPathConfigConnectionRoute,
  postRabbitmqMountPathConfigLeaseRoute,
  postRabbitmqMountPathRolesNameRoute,
  postSshMountPathConfigCaRoute,
  postSshMountPathConfigZeroaddressRoute,
  postSshMountPathCredsRoleRoute,
  postSshMountPathIssueRoleRoute,
  postSshMountPathLookupRoute,
  postSshMountPathRolesRoleRoute,
  postSshMountPathSignRoleRoute,
  postSshMountPathVerifyRoute,
  postTerraformMountPathConfigRoute,
  postTerraformMountPathCredsNameRoute,
  postTerraformMountPathRoleNameRoute,
  postTerraformMountPathRotateRoleNameRoute,
  postTotpMountPathCodeNameRoute,
  postTotpMountPathKeysNameRoute,
  postTransitMountPathCacheConfigRoute,
  postTransitMountPathConfigKeysRoute,
  postTransitMountPathDatakeyPlaintextNameRoute,
  postTransitMountPathDecryptNameRoute,
  postTransitMountPathEncryptNameRoute,
  postTransitMountPathHashRoute,
  postTransitMountPathHashUrlalgorithmRoute,
  postTransitMountPathHmacNameRoute,
  postTransitMountPathHmacNameUrlalgorithmRoute,
  postTransitMountPathKeysNameConfigRoute,
  postTransitMountPathKeysNameCsrRoute,
  postTransitMountPathKeysNameImportRoute,
  postTransitMountPathKeysNameImportVersionRoute,
  postTransitMountPathKeysNameRotateRoute,
  postTransitMountPathKeysNameRoute,
  postTransitMountPathKeysNameSetCertificateRoute,
  postTransitMountPathKeysNameTrimRoute,
  postTransitMountPathRandomRoute,
  postTransitMountPathRandomSourceRoute,
  postTransitMountPathRandomSourceUrlbytesRoute,
  postTransitMountPathRandomUrlbytesRoute,
  postTransitMountPathRestoreNameRoute,
  postTransitMountPathRestoreRoute,
  postTransitMountPathRewrapNameRoute,
  postTransitMountPathSignNameRoute,
  postTransitMountPathSignNameUrlalgorithmRoute,
  postTransitMountPathVerifyNameRoute,
  postTransitMountPathVerifyNameUrlalgorithmRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretsHandler = app
  .openapi(getCubbyholePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCubbyholePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCubbyholePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCubbyholePathIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlicloudMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlicloudMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAlicloudMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlicloudMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlicloudMountPathRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlicloudMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlicloudMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAlicloudMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAwsMountPathConfigLeaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAwsMountPathConfigLeaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAwsMountPathConfigRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAwsMountPathConfigRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAwsMountPathConfigRotateRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAwsMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAwsMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAwsMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAwsMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAwsMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAwsMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAwsMountPathStaticCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAwsMountPathStaticRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAwsMountPathStaticRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAwsMountPathStaticRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAwsMountPathStsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAwsMountPathStsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAzureMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAzureMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAzureMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAzureMountPathCredsRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAzureMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAzureMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAzureMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAzureMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAzureMountPathRotateRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsulMountPathConfigAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsulMountPathConfigAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsulMountPathCredsRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsulMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsulMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsulMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConsulMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseMountPathConfigIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseMountPathConfigNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabaseMountPathConfigNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabaseMountPathConfigNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabaseMountPathResetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabaseMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabaseMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabaseMountPathRotateRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabaseMountPathRotateRootNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseMountPathStaticCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseMountPathStaticRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseMountPathStaticRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabaseMountPathStaticRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabaseMountPathStaticRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathConfigRotateRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathImpersonatedAccountIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathImpersonatedAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathImpersonatedAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGcpMountPathImpersonatedAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathImpersonatedAccountNameTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathImpersonatedAccountNameTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathImpersonatedAccountsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathKeyRolesetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathKeyRolesetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathRolesetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathRolesetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathRolesetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGcpMountPathRolesetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathRolesetNameRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathRolesetNameRotateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathRolesetRolesetKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathRolesetRolesetKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathRolesetRolesetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathRolesetRolesetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathRolesetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathStaticAccountIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathStaticAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathStaticAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGcpMountPathStaticAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathStaticAccountNameKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathStaticAccountNameKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathStaticAccountNameRotateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathStaticAccountNameTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathStaticAccountNameTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathStaticAccountsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathTokenRolesetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathTokenRolesetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpkmsMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGcpkmsMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathDecryptKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathEncryptKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpkmsMountPathKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpkmsMountPathKeysConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathKeysConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathKeysDeregisterKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGcpkmsMountPathKeysDeregisterKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathKeysRegisterKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathKeysRotateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathKeysTrimKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGcpkmsMountPathKeysTrimKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpkmsMountPathKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGcpkmsMountPathKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpkmsMountPathPubkeyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathReencryptKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathSignKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathVerifyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesMountPathCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKubernetesMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKubernetesMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKvV1MountPathPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKvV1MountPathPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKvV1MountPathPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKvV1MountPathPathIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKvV2MountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKvV2MountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKvV2MountPathDataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKvV2MountPathDataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKvV2MountPathDataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKvV2MountPathDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKvV2MountPathDestroyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKvV2MountPathMetadataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKvV2MountPathMetadataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKvV2MountPathMetadataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKvV2MountPathMetadataPathIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKvV2MountPathSubkeysPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKvV2MountPathUndeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLdapMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathLibraryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathLibraryManageNameCheckInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathLibraryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathLibraryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLdapMountPathLibraryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathLibraryNameCheckInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathLibraryNameCheckOutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathLibraryNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLdapMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathRotateRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathRotateRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathStaticCredNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathStaticRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathStaticRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathStaticRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLdapMountPathStaticRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMongodbatlasMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMongodbatlasMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMongodbatlasMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMongodbatlasMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMongodbatlasMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMongodbatlasMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMongodbatlasMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMongodbatlasMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNomadMountPathConfigAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNomadMountPathConfigAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNomadMountPathConfigAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNomadMountPathConfigLeaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNomadMountPathConfigLeaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNomadMountPathConfigLeaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNomadMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNomadMountPathRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNomadMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNomadMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNomadMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(postRabbitmqMountPathConfigConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRabbitmqMountPathConfigLeaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRabbitmqMountPathConfigLeaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRabbitmqMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRabbitmqMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRabbitmqMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRabbitmqMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRabbitmqMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSshMountPathConfigCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshMountPathConfigCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSshMountPathConfigCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSshMountPathConfigZeroaddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshMountPathConfigZeroaddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSshMountPathConfigZeroaddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshMountPathCredsRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshMountPathIssueRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshMountPathLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSshMountPathPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSshMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSshMountPathRolesRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshMountPathRolesRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSshMountPathRolesRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshMountPathSignRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSshMountPathTidyDynamicKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshMountPathVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTerraformMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTerraformMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTerraformMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTerraformMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTerraformMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTerraformMountPathRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTerraformMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTerraformMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTerraformMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTerraformMountPathRotateRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTotpMountPathCodeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTotpMountPathCodeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTotpMountPathKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTotpMountPathKeysNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTotpMountPathKeysNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTotpMountPathKeysNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransitMountPathBackupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransitMountPathByokExportDestinationSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransitMountPathByokExportDestinationSourceVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransitMountPathCacheConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathCacheConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransitMountPathConfigKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathConfigKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathDatakeyPlaintextNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathDecryptNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathEncryptNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransitMountPathExportTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransitMountPathExportTypeNameVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathHashUrlalgorithmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathHmacNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathHmacNameUrlalgorithmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransitMountPathKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransitMountPathKeysNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathKeysNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTransitMountPathKeysNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathKeysNameConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathKeysNameCsrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathKeysNameImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathKeysNameImportVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathKeysNameRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathKeysNameSetCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathKeysNameTrimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathRandomSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathRandomSourceUrlbytesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathRandomUrlbytesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathRestoreNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathRewrapNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathSignNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathSignNameUrlalgorithmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathVerifyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitMountPathVerifyNameUrlalgorithmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransitMountPathWrappingKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
