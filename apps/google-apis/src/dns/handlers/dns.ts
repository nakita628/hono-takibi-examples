import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute,
  deleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeRoute,
  deleteDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute,
  deleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute,
  deleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdRoute,
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesRoute,
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdRoute,
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysRoute,
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationRoute,
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsRoute,
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute,
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeRoute,
  getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsRoute,
  getDnsV2ProjectsProjectLocationsLocationManagedZonesRoute,
  getDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute,
  getDnsV2ProjectsProjectLocationsLocationPoliciesRoute,
  getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute,
  getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
  getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesRoute,
  getDnsV2ProjectsProjectLocationsLocationResponsePoliciesRoute,
  getDnsV2ProjectsProjectLocationsLocationRoute,
  patchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute,
  patchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeRoute,
  patchDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute,
  patchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute,
  patchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
  postDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesRoute,
  postDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsRoute,
  postDnsV2ProjectsProjectLocationsLocationManagedZonesRoute,
  postDnsV2ProjectsProjectLocationsLocationPoliciesRoute,
  postDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesRoute,
  postDnsV2ProjectsProjectLocationsLocationResponsePoliciesRoute,
  postDnsV2ResourceGetIamPolicyRoute,
  postDnsV2ResourceSetIamPolicyRoute,
  postDnsV2ResourceTestIamPermissionsRoute,
  putDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute,
  putDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute,
  putDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute,
  putDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dnsHandler = app
  .openapi(getDnsV2ProjectsProjectLocationsLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDnsV2ProjectsProjectLocationsLocationManagedZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsV2ProjectsProjectLocationsLocationManagedZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDnsV2ProjectsProjectLocationsLocationPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsV2ProjectsProjectLocationsLocationPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDnsV2ProjectsProjectLocationsLocationResponsePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsV2ProjectsProjectLocationsLocationResponsePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDnsV2ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsV2ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsV2ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
