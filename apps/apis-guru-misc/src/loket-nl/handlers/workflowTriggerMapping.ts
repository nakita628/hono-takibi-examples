import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersWorkflowtriggermappingsWorkflowTriggerMappingIdRoute,
  getProvidersEmployersEmployerIdWorkflowtriggermappingsRoute,
  getProvidersEmployersWorkflowtriggermappingsWorkflowTriggerMappingIdRoute,
  postProvidersEmployersEmployerIdWorkflowtriggermappingsRoute,
  putProvidersEmployersWorkflowtriggermappingsWorkflowTriggerMappingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowTriggerMappingHandler = app
  .openapi(deleteProvidersEmployersWorkflowtriggermappingsWorkflowTriggerMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersWorkflowtriggermappingsWorkflowTriggerMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersWorkflowtriggermappingsWorkflowTriggerMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdWorkflowtriggermappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdWorkflowtriggermappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
