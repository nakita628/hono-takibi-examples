import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRoute,
  deleteLinuxhostingsDomainNameSshKeysFingerprintRoute,
  deleteLinuxhostingsDomainNameSubsitesSiteNameRoute,
  getLinuxhostingsDomainNamePhpsettingsAvailableversionsRoute,
  getLinuxhostingsDomainNameRoute,
  getLinuxhostingsDomainNameScheduledtasksRoute,
  getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRoute,
  getLinuxhostingsDomainNameSshKeysRoute,
  getLinuxhostingsRoute,
  postLinuxhostingsDomainNameScheduledtasksRoute,
  postLinuxhostingsDomainNameSitesSiteNameHostheadersRoute,
  postLinuxhostingsDomainNameSshKeysRoute,
  postLinuxhostingsDomainNameSubsitesRoute,
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
} from '../routes'

const app = new OpenAPIHono()

export const linuxHostingsHandler = app
  .openapi(getLinuxhostingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinuxhostingsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLinuxhostingsDomainNameFtpConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLinuxhostingsDomainNamePhpsettingsApcuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinuxhostingsDomainNamePhpsettingsAvailableversionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLinuxhostingsDomainNamePhpsettingsMemorylimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLinuxhostingsDomainNamePhpsettingsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinuxhostingsDomainNameScheduledtasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinuxhostingsDomainNameScheduledtasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLinuxhostingsDomainNameScheduledtasksScheduledTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLinuxhostingsDomainNameSettingsGzipcompressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinuxhostingsDomainNameSitesSiteNameHostheadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLinuxhostingsDomainNameSitesSiteNameHttp2ConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLinuxhostingsDomainNameSshConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinuxhostingsDomainNameSshKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinuxhostingsDomainNameSshKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLinuxhostingsDomainNameSshKeysFingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLinuxhostingsDomainNameSslsettingsHostnameAutoredirectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLinuxhostingsDomainNameSslsettingsHostnameLetsencryptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinuxhostingsDomainNameSubsitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLinuxhostingsDomainNameSubsitesSiteNameRoute, (c) => {
    throw new Error('Not implemented')
  })
