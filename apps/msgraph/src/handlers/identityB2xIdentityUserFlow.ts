import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostAttributeCollectionRefRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostAttributeCollectionRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostFederationSignupRefRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostFederationSignupRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdValueRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdValueRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersIdentityProviderBaseIdRefRoute,
  deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersRefRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostAttributeCollectionRefRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostAttributeCollectionRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostFederationSignupRefRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostFederationSignupRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdIdentityProvidersCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdIdentityProvidersIdentityProviderIdRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdIdentityProvidersRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdValueRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdValueRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsGetOrderRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdUserAttributeRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersCountRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersRefRoute,
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersRoute,
  getIdentityB2xUserFlowsCountRoute,
  getIdentityB2xUserFlowsRoute,
  patchIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostAttributeCollectionRoute,
  patchIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostFederationSignupRoute,
  patchIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdRoute,
  patchIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdRoute,
  patchIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdRoute,
  patchIdentityB2xUserFlowsB2xIdentityUserFlowIdRoute,
  patchIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdRoute,
  postIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostAttributeCollectionUploadClientCertificateRoute,
  postIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostFederationSignupUploadClientCertificateRoute,
  postIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesRoute,
  postIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesRoute,
  postIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesRoute,
  postIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsRoute,
  postIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsSetOrderRoute,
  postIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersRefRoute,
  postIdentityB2xUserFlowsRoute,
  putIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostAttributeCollectionRefRoute,
  putIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostFederationSignupRefRoute,
  putIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdValueRoute,
  putIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityB2xIdentityUserFlowHandler = app
  .openapi(getIdentityB2xUserFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityB2xUserFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityB2xUserFlowsB2xIdentityUserFlowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityB2xUserFlowsB2xIdentityUserFlowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostAttributeCollectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostAttributeCollectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostAttributeCollectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostAttributeCollectionRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostAttributeCollectionRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostAttributeCollectionRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostAttributeCollectionUploadClientCertificateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostFederationSignupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostFederationSignupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostFederationSignupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostFederationSignupRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostFederationSignupRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostFederationSignupRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityB2xUserFlowsB2xIdentityUserFlowIdApiConnectorConfigurationPostFederationSignupUploadClientCertificateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityB2xUserFlowsB2xIdentityUserFlowIdIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdIdentityProvidersIdentityProviderIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityB2xUserFlowsB2xIdentityUserFlowIdIdentityProvidersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesUserFlowLanguagePageIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdDefaultPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesUserFlowLanguagePageIdValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesUserFlowLanguageConfigurationIdOverridesPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityB2xUserFlowsB2xIdentityUserFlowIdLanguagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsIdentityUserFlowAttributeAssignmentIdUserAttributeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsGetOrderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsSetOrderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersIdentityProviderBaseIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteIdentityB2xUserFlowsB2xIdentityUserFlowIdUserFlowIdentityProvidersRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityB2xUserFlowsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
