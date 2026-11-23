import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfigRoute,
  postAppsSystemConfigComShinesolutionsAemPasswordresetActivatorRoute,
  postAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckRoute,
  postAppsSystemConfigConfigNodeNameRoute,
  postAppsSystemConfigOrgApacheFelixHttpRoute,
  postAppsSystemConfigOrgApacheHttpProxyconfiguratorConfigRoute,
  postAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServletRoute,
  postAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilterRoute,
  postAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServletRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app
  .openapi(postAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsSystemConfigComShinesolutionsAemPasswordresetActivatorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAppsSystemConfigOrgApacheFelixHttpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsSystemConfigOrgApacheHttpProxyconfiguratorConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsSystemConfigConfigNodeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
