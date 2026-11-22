import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeDataSecurityAndGovernanceActivitiesContentActivitiesContentActivityIdRoute,
  deleteMeDataSecurityAndGovernanceActivitiesRoute,
  deleteMeDataSecurityAndGovernanceProtectionScopesRoute,
  deleteMeDataSecurityAndGovernanceRoute,
  deleteMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdRoute,
  deleteMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsSensitivityLabelId1Route,
  getMeDataSecurityAndGovernanceActivitiesContentActivitiesContentActivityIdRoute,
  getMeDataSecurityAndGovernanceActivitiesContentActivitiesCountRoute,
  getMeDataSecurityAndGovernanceActivitiesContentActivitiesRoute,
  getMeDataSecurityAndGovernanceActivitiesRoute,
  getMeDataSecurityAndGovernanceProtectionScopesRoute,
  getMeDataSecurityAndGovernanceRoute,
  getMeDataSecurityAndGovernanceSensitivityLabelsComputeInheritanceLabelIdsLabelIdsLocaleLocaleContentFormatsContentFormatsRoute,
  getMeDataSecurityAndGovernanceSensitivityLabelsCountRoute,
  getMeDataSecurityAndGovernanceSensitivityLabelsRoute,
  getMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdRightsRoute,
  getMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdRoute,
  getMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsComputeInheritanceLabelIdsLabelIdsLocaleLocaleContentFormatsContentFormatsRoute,
  getMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsCountRoute,
  getMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsRoute,
  getMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsSensitivityLabelId1RightsRoute,
  getMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsSensitivityLabelId1Route,
  patchMeDataSecurityAndGovernanceActivitiesContentActivitiesContentActivityIdRoute,
  patchMeDataSecurityAndGovernanceActivitiesRoute,
  patchMeDataSecurityAndGovernanceProtectionScopesRoute,
  patchMeDataSecurityAndGovernanceRoute,
  patchMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdRoute,
  patchMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsSensitivityLabelId1Route,
  postMeDataSecurityAndGovernanceActivitiesContentActivitiesRoute,
  postMeDataSecurityAndGovernanceProcessContentRoute,
  postMeDataSecurityAndGovernanceProtectionScopesComputeRoute,
  postMeDataSecurityAndGovernanceSensitivityLabelsComputeRightsAndInheritanceRoute,
  postMeDataSecurityAndGovernanceSensitivityLabelsRoute,
  postMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsComputeRightsAndInheritanceRoute,
  postMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meUserDataSecurityAndGovernanceHandler = app
  .openapi(getMeDataSecurityAndGovernanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeDataSecurityAndGovernanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeDataSecurityAndGovernanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDataSecurityAndGovernanceActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeDataSecurityAndGovernanceActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeDataSecurityAndGovernanceActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDataSecurityAndGovernanceActivitiesContentActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeDataSecurityAndGovernanceActivitiesContentActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDataSecurityAndGovernanceActivitiesContentActivitiesContentActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchMeDataSecurityAndGovernanceActivitiesContentActivitiesContentActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeDataSecurityAndGovernanceActivitiesContentActivitiesContentActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeDataSecurityAndGovernanceActivitiesContentActivitiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeDataSecurityAndGovernanceProcessContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDataSecurityAndGovernanceProtectionScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeDataSecurityAndGovernanceProtectionScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeDataSecurityAndGovernanceProtectionScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeDataSecurityAndGovernanceProtectionScopesComputeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDataSecurityAndGovernanceSensitivityLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeDataSecurityAndGovernanceSensitivityLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdRightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsSensitivityLabelId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsSensitivityLabelId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsSensitivityLabelId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsSensitivityLabelId1RightsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsComputeInheritanceLabelIdsLabelIdsLocaleLocaleContentFormatsContentFormatsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeDataSecurityAndGovernanceSensitivityLabelsSensitivityLabelIdSublabelsComputeRightsAndInheritanceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeDataSecurityAndGovernanceSensitivityLabelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeDataSecurityAndGovernanceSensitivityLabelsComputeInheritanceLabelIdsLabelIdsLocaleLocaleContentFormatsContentFormatsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeDataSecurityAndGovernanceSensitivityLabelsComputeRightsAndInheritanceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
