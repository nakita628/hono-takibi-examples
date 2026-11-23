import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get20RepositoriesUsernameRoute,
  get20RepositoriesUsernameSlugPullrequestsPidRoute,
  get20RepositoriesUsernameSlugPullrequestsRoute,
  get20RepositoriesUsernameSlugRoute,
  get20UsersUsernameRoute,
  post20RepositoriesUsernameSlugPullrequestsPidMergeRoute,
} from './routes'
import {
  get20RepositoriesUsernameRouteHandler,
  get20RepositoriesUsernameSlugPullrequestsPidRouteHandler,
  get20RepositoriesUsernameSlugPullrequestsRouteHandler,
  get20RepositoriesUsernameSlugRouteHandler,
  get20UsersUsernameRouteHandler,
  post20RepositoriesUsernameSlugPullrequestsPidMergeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(get20UsersUsernameRoute, get20UsersUsernameRouteHandler)
  .openapi(get20RepositoriesUsernameRoute, get20RepositoriesUsernameRouteHandler)
  .openapi(get20RepositoriesUsernameSlugRoute, get20RepositoriesUsernameSlugRouteHandler)
  .openapi(
    get20RepositoriesUsernameSlugPullrequestsRoute,
    get20RepositoriesUsernameSlugPullrequestsRouteHandler,
  )
  .openapi(
    get20RepositoriesUsernameSlugPullrequestsPidRoute,
    get20RepositoriesUsernameSlugPullrequestsPidRouteHandler,
  )
  .openapi(
    post20RepositoriesUsernameSlugPullrequestsPidMergeRoute,
    post20RepositoriesUsernameSlugPullrequestsPidMergeRouteHandler,
  )

export default app
