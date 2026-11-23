import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDnsDomainNameRecordsRecordIdRoute,
  deleteLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRoute,
  deleteLinuxhostingsDomainNameSshKeysFingerprintRoute,
  deleteLinuxhostingsDomainNameSubsitesSiteNameRoute,
  deleteMailboxesMailboxNameRoute,
  deleteMailzonesDomainNameAliasesEmailAddressRoute,
  deleteMailzonesDomainNameCatchallEmailAddressRoute,
  deleteMailzonesDomainNameSmtpdomainsHostnameRoute,
  deleteMysqldatabasesDatabaseNameRoute,
  deleteMysqldatabasesDatabaseNameUsersUserNameRoute,
  getAccountsAccountIdRoute,
  getAccountsRoute,
  getDnsDomainNameRecordsRecordIdRoute,
  getDnsDomainNameRecordsRoute,
  getDomainsDomainNameRoute,
  getDomainsRoute,
  getLinuxhostingsDomainNamePhpsettingsAvailableversionsRoute,
  getLinuxhostingsDomainNameRoute,
  getLinuxhostingsDomainNameScheduledtasksRoute,
  getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRoute,
  getLinuxhostingsDomainNameSshKeysRoute,
  getLinuxhostingsRoute,
  getMailboxesMailboxNameRoute,
  getMailboxesRoute,
  getMailzonesDomainNameRoute,
  getMysqldatabasesDatabaseNameRoute,
  getMysqldatabasesDatabaseNameUsersRoute,
  getMysqldatabasesRoute,
  getProvisioningjobsJobIdRoute,
  getServicepacksRoute,
  getSshRoute,
  getSslcertificaterequestsIdRoute,
  getSslcertificaterequestsRoute,
  getSslcertificatesRoute,
  getSslcertificatesSha1FingerprintDownloadRoute,
  getSslcertificatesSha1FingerprintRoute,
  getWindowshostingsDomainNameRoute,
  getWindowshostingsRoute,
  postAccountsRoute,
  postDnsDomainNameRecordsRoute,
  postDomainsRegistrationsRoute,
  postDomainsTransfersRoute,
  postLinuxhostingsDomainNameScheduledtasksRoute,
  postLinuxhostingsDomainNameSitesSiteNameHostheadersRoute,
  postLinuxhostingsDomainNameSshKeysRoute,
  postLinuxhostingsDomainNameSubsitesRoute,
  postMailboxesRoute,
  postMailzonesDomainNameAliasesRoute,
  postMailzonesDomainNameCatchallRoute,
  postMailzonesDomainNameSmtpdomainsRoute,
  postMysqldatabasesDatabaseNameUsersRoute,
  postMysqldatabasesRoute,
  postSslcertificaterequestsRoute,
  putDnsDomainNameRecordsRecordIdRoute,
  putDomainsDomainNameNameserversRoute,
  putDomainsDomainNameRenewRoute,
  putLinuxhostingsDomainNameFtpConfigurationRoute,
  putLinuxhostingsDomainNamePhpsettingsApcuRoute,
  putLinuxhostingsDomainNamePhpsettingsMemorylimitRoute,
  putLinuxhostingsDomainNamePhpsettingsVersionRoute,
  putLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRoute,
  putLinuxhostingsDomainNameSettingsGzipcompressionRoute,
  putLinuxhostingsDomainNameSitesSiteNameHttp2ConfigurationRoute,
  putLinuxhostingsDomainNameSshConfigurationRoute,
  putLinuxhostingsDomainNameSslsettingsHostnameAutoredirectRoute,
  putLinuxhostingsDomainNameSslsettingsHostnameLetsencryptRoute,
  putMailboxesMailboxNameAutoforwardRoute,
  putMailboxesMailboxNameAutoreplyRoute,
  putMailboxesMailboxNamePasswordRoute,
  putMailzonesDomainNameAliasesEmailAddressRoute,
  putMailzonesDomainNameAntispamRoute,
  putMailzonesDomainNameSmtpdomainsHostnameRoute,
  putMysqldatabasesDatabaseNameUsersUserNamePasswordRoute,
  putMysqldatabasesDatabaseNameUsersUserNameStatusRoute,
  putSslcertificaterequestsIdRoute,
} from './routes'
import {
  deleteDnsDomainNameRecordsRecordIdRouteHandler,
  deleteLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRouteHandler,
  deleteLinuxhostingsDomainNameSshKeysFingerprintRouteHandler,
  deleteLinuxhostingsDomainNameSubsitesSiteNameRouteHandler,
  deleteMailboxesMailboxNameRouteHandler,
  deleteMailzonesDomainNameAliasesEmailAddressRouteHandler,
  deleteMailzonesDomainNameCatchallEmailAddressRouteHandler,
  deleteMailzonesDomainNameSmtpdomainsHostnameRouteHandler,
  deleteMysqldatabasesDatabaseNameRouteHandler,
  deleteMysqldatabasesDatabaseNameUsersUserNameRouteHandler,
  getAccountsAccountIdRouteHandler,
  getAccountsRouteHandler,
  getDnsDomainNameRecordsRecordIdRouteHandler,
  getDnsDomainNameRecordsRouteHandler,
  getDomainsDomainNameRouteHandler,
  getDomainsRouteHandler,
  getLinuxhostingsDomainNamePhpsettingsAvailableversionsRouteHandler,
  getLinuxhostingsDomainNameRouteHandler,
  getLinuxhostingsDomainNameScheduledtasksRouteHandler,
  getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRouteHandler,
  getLinuxhostingsDomainNameSshKeysRouteHandler,
  getLinuxhostingsRouteHandler,
  getMailboxesMailboxNameRouteHandler,
  getMailboxesRouteHandler,
  getMailzonesDomainNameRouteHandler,
  getMysqldatabasesDatabaseNameRouteHandler,
  getMysqldatabasesDatabaseNameUsersRouteHandler,
  getMysqldatabasesRouteHandler,
  getProvisioningjobsJobIdRouteHandler,
  getServicepacksRouteHandler,
  getSshRouteHandler,
  getSslcertificaterequestsIdRouteHandler,
  getSslcertificaterequestsRouteHandler,
  getSslcertificatesRouteHandler,
  getSslcertificatesSha1FingerprintDownloadRouteHandler,
  getSslcertificatesSha1FingerprintRouteHandler,
  getWindowshostingsDomainNameRouteHandler,
  getWindowshostingsRouteHandler,
  postAccountsRouteHandler,
  postDnsDomainNameRecordsRouteHandler,
  postDomainsRegistrationsRouteHandler,
  postDomainsTransfersRouteHandler,
  postLinuxhostingsDomainNameScheduledtasksRouteHandler,
  postLinuxhostingsDomainNameSitesSiteNameHostheadersRouteHandler,
  postLinuxhostingsDomainNameSshKeysRouteHandler,
  postLinuxhostingsDomainNameSubsitesRouteHandler,
  postMailboxesRouteHandler,
  postMailzonesDomainNameAliasesRouteHandler,
  postMailzonesDomainNameCatchallRouteHandler,
  postMailzonesDomainNameSmtpdomainsRouteHandler,
  postMysqldatabasesDatabaseNameUsersRouteHandler,
  postMysqldatabasesRouteHandler,
  postSslcertificaterequestsRouteHandler,
  putDnsDomainNameRecordsRecordIdRouteHandler,
  putDomainsDomainNameNameserversRouteHandler,
  putDomainsDomainNameRenewRouteHandler,
  putLinuxhostingsDomainNameFtpConfigurationRouteHandler,
  putLinuxhostingsDomainNamePhpsettingsApcuRouteHandler,
  putLinuxhostingsDomainNamePhpsettingsMemorylimitRouteHandler,
  putLinuxhostingsDomainNamePhpsettingsVersionRouteHandler,
  putLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRouteHandler,
  putLinuxhostingsDomainNameSettingsGzipcompressionRouteHandler,
  putLinuxhostingsDomainNameSitesSiteNameHttp2ConfigurationRouteHandler,
  putLinuxhostingsDomainNameSshConfigurationRouteHandler,
  putLinuxhostingsDomainNameSslsettingsHostnameAutoredirectRouteHandler,
  putLinuxhostingsDomainNameSslsettingsHostnameLetsencryptRouteHandler,
  putMailboxesMailboxNameAutoforwardRouteHandler,
  putMailboxesMailboxNameAutoreplyRouteHandler,
  putMailboxesMailboxNamePasswordRouteHandler,
  putMailzonesDomainNameAliasesEmailAddressRouteHandler,
  putMailzonesDomainNameAntispamRouteHandler,
  putMailzonesDomainNameSmtpdomainsHostnameRouteHandler,
  putMysqldatabasesDatabaseNameUsersUserNamePasswordRouteHandler,
  putMysqldatabasesDatabaseNameUsersUserNameStatusRouteHandler,
  putSslcertificaterequestsIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(postAccountsRoute, postAccountsRouteHandler)
  .openapi(getAccountsAccountIdRoute, getAccountsAccountIdRouteHandler)
  .openapi(getDnsDomainNameRecordsRoute, getDnsDomainNameRecordsRouteHandler)
  .openapi(postDnsDomainNameRecordsRoute, postDnsDomainNameRecordsRouteHandler)
  .openapi(deleteDnsDomainNameRecordsRecordIdRoute, deleteDnsDomainNameRecordsRecordIdRouteHandler)
  .openapi(getDnsDomainNameRecordsRecordIdRoute, getDnsDomainNameRecordsRecordIdRouteHandler)
  .openapi(putDnsDomainNameRecordsRecordIdRoute, putDnsDomainNameRecordsRecordIdRouteHandler)
  .openapi(getDomainsRoute, getDomainsRouteHandler)
  .openapi(postDomainsRegistrationsRoute, postDomainsRegistrationsRouteHandler)
  .openapi(postDomainsTransfersRoute, postDomainsTransfersRouteHandler)
  .openapi(getDomainsDomainNameRoute, getDomainsDomainNameRouteHandler)
  .openapi(putDomainsDomainNameNameserversRoute, putDomainsDomainNameNameserversRouteHandler)
  .openapi(putDomainsDomainNameRenewRoute, putDomainsDomainNameRenewRouteHandler)
  .openapi(getLinuxhostingsRoute, getLinuxhostingsRouteHandler)
  .openapi(getLinuxhostingsDomainNameRoute, getLinuxhostingsDomainNameRouteHandler)
  .openapi(
    putLinuxhostingsDomainNameFtpConfigurationRoute,
    putLinuxhostingsDomainNameFtpConfigurationRouteHandler,
  )
  .openapi(
    putLinuxhostingsDomainNamePhpsettingsApcuRoute,
    putLinuxhostingsDomainNamePhpsettingsApcuRouteHandler,
  )
  .openapi(
    getLinuxhostingsDomainNamePhpsettingsAvailableversionsRoute,
    getLinuxhostingsDomainNamePhpsettingsAvailableversionsRouteHandler,
  )
  .openapi(
    putLinuxhostingsDomainNamePhpsettingsMemorylimitRoute,
    putLinuxhostingsDomainNamePhpsettingsMemorylimitRouteHandler,
  )
  .openapi(
    putLinuxhostingsDomainNamePhpsettingsVersionRoute,
    putLinuxhostingsDomainNamePhpsettingsVersionRouteHandler,
  )
  .openapi(
    getLinuxhostingsDomainNameScheduledtasksRoute,
    getLinuxhostingsDomainNameScheduledtasksRouteHandler,
  )
  .openapi(
    postLinuxhostingsDomainNameScheduledtasksRoute,
    postLinuxhostingsDomainNameScheduledtasksRouteHandler,
  )
  .openapi(
    deleteLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRoute,
    deleteLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRouteHandler,
  )
  .openapi(
    getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRoute,
    getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRouteHandler,
  )
  .openapi(
    putLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRoute,
    putLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRouteHandler,
  )
  .openapi(
    putLinuxhostingsDomainNameSettingsGzipcompressionRoute,
    putLinuxhostingsDomainNameSettingsGzipcompressionRouteHandler,
  )
  .openapi(
    postLinuxhostingsDomainNameSitesSiteNameHostheadersRoute,
    postLinuxhostingsDomainNameSitesSiteNameHostheadersRouteHandler,
  )
  .openapi(
    putLinuxhostingsDomainNameSitesSiteNameHttp2ConfigurationRoute,
    putLinuxhostingsDomainNameSitesSiteNameHttp2ConfigurationRouteHandler,
  )
  .openapi(
    putLinuxhostingsDomainNameSshConfigurationRoute,
    putLinuxhostingsDomainNameSshConfigurationRouteHandler,
  )
  .openapi(getLinuxhostingsDomainNameSshKeysRoute, getLinuxhostingsDomainNameSshKeysRouteHandler)
  .openapi(postLinuxhostingsDomainNameSshKeysRoute, postLinuxhostingsDomainNameSshKeysRouteHandler)
  .openapi(
    deleteLinuxhostingsDomainNameSshKeysFingerprintRoute,
    deleteLinuxhostingsDomainNameSshKeysFingerprintRouteHandler,
  )
  .openapi(
    putLinuxhostingsDomainNameSslsettingsHostnameAutoredirectRoute,
    putLinuxhostingsDomainNameSslsettingsHostnameAutoredirectRouteHandler,
  )
  .openapi(
    putLinuxhostingsDomainNameSslsettingsHostnameLetsencryptRoute,
    putLinuxhostingsDomainNameSslsettingsHostnameLetsencryptRouteHandler,
  )
  .openapi(
    postLinuxhostingsDomainNameSubsitesRoute,
    postLinuxhostingsDomainNameSubsitesRouteHandler,
  )
  .openapi(
    deleteLinuxhostingsDomainNameSubsitesSiteNameRoute,
    deleteLinuxhostingsDomainNameSubsitesSiteNameRouteHandler,
  )
  .openapi(getMailboxesRoute, getMailboxesRouteHandler)
  .openapi(postMailboxesRoute, postMailboxesRouteHandler)
  .openapi(deleteMailboxesMailboxNameRoute, deleteMailboxesMailboxNameRouteHandler)
  .openapi(getMailboxesMailboxNameRoute, getMailboxesMailboxNameRouteHandler)
  .openapi(putMailboxesMailboxNameAutoforwardRoute, putMailboxesMailboxNameAutoforwardRouteHandler)
  .openapi(putMailboxesMailboxNameAutoreplyRoute, putMailboxesMailboxNameAutoreplyRouteHandler)
  .openapi(putMailboxesMailboxNamePasswordRoute, putMailboxesMailboxNamePasswordRouteHandler)
  .openapi(getMailzonesDomainNameRoute, getMailzonesDomainNameRouteHandler)
  .openapi(postMailzonesDomainNameAliasesRoute, postMailzonesDomainNameAliasesRouteHandler)
  .openapi(
    deleteMailzonesDomainNameAliasesEmailAddressRoute,
    deleteMailzonesDomainNameAliasesEmailAddressRouteHandler,
  )
  .openapi(
    putMailzonesDomainNameAliasesEmailAddressRoute,
    putMailzonesDomainNameAliasesEmailAddressRouteHandler,
  )
  .openapi(putMailzonesDomainNameAntispamRoute, putMailzonesDomainNameAntispamRouteHandler)
  .openapi(postMailzonesDomainNameCatchallRoute, postMailzonesDomainNameCatchallRouteHandler)
  .openapi(
    deleteMailzonesDomainNameCatchallEmailAddressRoute,
    deleteMailzonesDomainNameCatchallEmailAddressRouteHandler,
  )
  .openapi(postMailzonesDomainNameSmtpdomainsRoute, postMailzonesDomainNameSmtpdomainsRouteHandler)
  .openapi(
    deleteMailzonesDomainNameSmtpdomainsHostnameRoute,
    deleteMailzonesDomainNameSmtpdomainsHostnameRouteHandler,
  )
  .openapi(
    putMailzonesDomainNameSmtpdomainsHostnameRoute,
    putMailzonesDomainNameSmtpdomainsHostnameRouteHandler,
  )
  .openapi(getMysqldatabasesRoute, getMysqldatabasesRouteHandler)
  .openapi(postMysqldatabasesRoute, postMysqldatabasesRouteHandler)
  .openapi(deleteMysqldatabasesDatabaseNameRoute, deleteMysqldatabasesDatabaseNameRouteHandler)
  .openapi(getMysqldatabasesDatabaseNameRoute, getMysqldatabasesDatabaseNameRouteHandler)
  .openapi(getMysqldatabasesDatabaseNameUsersRoute, getMysqldatabasesDatabaseNameUsersRouteHandler)
  .openapi(
    postMysqldatabasesDatabaseNameUsersRoute,
    postMysqldatabasesDatabaseNameUsersRouteHandler,
  )
  .openapi(
    deleteMysqldatabasesDatabaseNameUsersUserNameRoute,
    deleteMysqldatabasesDatabaseNameUsersUserNameRouteHandler,
  )
  .openapi(
    putMysqldatabasesDatabaseNameUsersUserNamePasswordRoute,
    putMysqldatabasesDatabaseNameUsersUserNamePasswordRouteHandler,
  )
  .openapi(
    putMysqldatabasesDatabaseNameUsersUserNameStatusRoute,
    putMysqldatabasesDatabaseNameUsersUserNameStatusRouteHandler,
  )
  .openapi(getProvisioningjobsJobIdRoute, getProvisioningjobsJobIdRouteHandler)
  .openapi(getServicepacksRoute, getServicepacksRouteHandler)
  .openapi(getSshRoute, getSshRouteHandler)
  .openapi(getSslcertificaterequestsRoute, getSslcertificaterequestsRouteHandler)
  .openapi(postSslcertificaterequestsRoute, postSslcertificaterequestsRouteHandler)
  .openapi(getSslcertificaterequestsIdRoute, getSslcertificaterequestsIdRouteHandler)
  .openapi(putSslcertificaterequestsIdRoute, putSslcertificaterequestsIdRouteHandler)
  .openapi(getSslcertificatesRoute, getSslcertificatesRouteHandler)
  .openapi(getSslcertificatesSha1FingerprintRoute, getSslcertificatesSha1FingerprintRouteHandler)
  .openapi(
    getSslcertificatesSha1FingerprintDownloadRoute,
    getSslcertificatesSha1FingerprintDownloadRouteHandler,
  )
  .openapi(getWindowshostingsRoute, getWindowshostingsRouteHandler)
  .openapi(getWindowshostingsDomainNameRoute, getWindowshostingsDomainNameRouteHandler)

export default app
