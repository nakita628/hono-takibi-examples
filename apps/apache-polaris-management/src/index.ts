import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCatalogsCatalogNameCatalogRolesCatalogRoleNameRoute,
  deleteCatalogsCatalogNameRoute,
  deletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleNameRoute,
  deletePrincipalRolesPrincipalRoleNameRoute,
  deletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleNameRoute,
  deletePrincipalsPrincipalNameRoute,
  getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRoute,
  getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesRoute,
  getCatalogsCatalogNameCatalogRolesCatalogRoleNameRoute,
  getCatalogsCatalogNameCatalogRolesRoute,
  getCatalogsCatalogNameRoute,
  getCatalogsRoute,
  getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRoute,
  getPrincipalRolesPrincipalRoleNamePrincipalsRoute,
  getPrincipalRolesPrincipalRoleNameRoute,
  getPrincipalRolesRoute,
  getPrincipalsPrincipalNamePrincipalRolesRoute,
  getPrincipalsPrincipalNameRoute,
  getPrincipalsRoute,
  postCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRoute,
  postCatalogsCatalogNameCatalogRolesRoute,
  postCatalogsRoute,
  postPrincipalRolesRoute,
  postPrincipalsPrincipalNameResetRoute,
  postPrincipalsPrincipalNameRotateRoute,
  postPrincipalsRoute,
  putCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRoute,
  putCatalogsCatalogNameCatalogRolesCatalogRoleNameRoute,
  putCatalogsCatalogNameRoute,
  putPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRoute,
  putPrincipalRolesPrincipalRoleNameRoute,
  putPrincipalsPrincipalNamePrincipalRolesRoute,
  putPrincipalsPrincipalNameRoute,
} from './routes'
import {
  deleteCatalogsCatalogNameCatalogRolesCatalogRoleNameRouteHandler,
  deleteCatalogsCatalogNameRouteHandler,
  deletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleNameRouteHandler,
  deletePrincipalRolesPrincipalRoleNameRouteHandler,
  deletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleNameRouteHandler,
  deletePrincipalsPrincipalNameRouteHandler,
  getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRouteHandler,
  getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesRouteHandler,
  getCatalogsCatalogNameCatalogRolesCatalogRoleNameRouteHandler,
  getCatalogsCatalogNameCatalogRolesRouteHandler,
  getCatalogsCatalogNameRouteHandler,
  getCatalogsRouteHandler,
  getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRouteHandler,
  getPrincipalRolesPrincipalRoleNamePrincipalsRouteHandler,
  getPrincipalRolesPrincipalRoleNameRouteHandler,
  getPrincipalRolesRouteHandler,
  getPrincipalsPrincipalNamePrincipalRolesRouteHandler,
  getPrincipalsPrincipalNameRouteHandler,
  getPrincipalsRouteHandler,
  postCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRouteHandler,
  postCatalogsCatalogNameCatalogRolesRouteHandler,
  postCatalogsRouteHandler,
  postPrincipalRolesRouteHandler,
  postPrincipalsPrincipalNameResetRouteHandler,
  postPrincipalsPrincipalNameRotateRouteHandler,
  postPrincipalsRouteHandler,
  putCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRouteHandler,
  putCatalogsCatalogNameCatalogRolesCatalogRoleNameRouteHandler,
  putCatalogsCatalogNameRouteHandler,
  putPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRouteHandler,
  putPrincipalRolesPrincipalRoleNameRouteHandler,
  putPrincipalsPrincipalNamePrincipalRolesRouteHandler,
  putPrincipalsPrincipalNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCatalogsRoute, getCatalogsRouteHandler)
  .openapi(postCatalogsRoute, postCatalogsRouteHandler)
  .openapi(getCatalogsCatalogNameRoute, getCatalogsCatalogNameRouteHandler)
  .openapi(putCatalogsCatalogNameRoute, putCatalogsCatalogNameRouteHandler)
  .openapi(deleteCatalogsCatalogNameRoute, deleteCatalogsCatalogNameRouteHandler)
  .openapi(getPrincipalsRoute, getPrincipalsRouteHandler)
  .openapi(postPrincipalsRoute, postPrincipalsRouteHandler)
  .openapi(getPrincipalsPrincipalNameRoute, getPrincipalsPrincipalNameRouteHandler)
  .openapi(putPrincipalsPrincipalNameRoute, putPrincipalsPrincipalNameRouteHandler)
  .openapi(deletePrincipalsPrincipalNameRoute, deletePrincipalsPrincipalNameRouteHandler)
  .openapi(postPrincipalsPrincipalNameRotateRoute, postPrincipalsPrincipalNameRotateRouteHandler)
  .openapi(postPrincipalsPrincipalNameResetRoute, postPrincipalsPrincipalNameResetRouteHandler)
  .openapi(
    getPrincipalsPrincipalNamePrincipalRolesRoute,
    getPrincipalsPrincipalNamePrincipalRolesRouteHandler,
  )
  .openapi(
    putPrincipalsPrincipalNamePrincipalRolesRoute,
    putPrincipalsPrincipalNamePrincipalRolesRouteHandler,
  )
  .openapi(
    deletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleNameRoute,
    deletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleNameRouteHandler,
  )
  .openapi(getPrincipalRolesRoute, getPrincipalRolesRouteHandler)
  .openapi(postPrincipalRolesRoute, postPrincipalRolesRouteHandler)
  .openapi(getPrincipalRolesPrincipalRoleNameRoute, getPrincipalRolesPrincipalRoleNameRouteHandler)
  .openapi(putPrincipalRolesPrincipalRoleNameRoute, putPrincipalRolesPrincipalRoleNameRouteHandler)
  .openapi(
    deletePrincipalRolesPrincipalRoleNameRoute,
    deletePrincipalRolesPrincipalRoleNameRouteHandler,
  )
  .openapi(
    getPrincipalRolesPrincipalRoleNamePrincipalsRoute,
    getPrincipalRolesPrincipalRoleNamePrincipalsRouteHandler,
  )
  .openapi(
    getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRoute,
    getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRouteHandler,
  )
  .openapi(
    putPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRoute,
    putPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRouteHandler,
  )
  .openapi(
    deletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleNameRoute,
    deletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleNameRouteHandler,
  )
  .openapi(getCatalogsCatalogNameCatalogRolesRoute, getCatalogsCatalogNameCatalogRolesRouteHandler)
  .openapi(
    postCatalogsCatalogNameCatalogRolesRoute,
    postCatalogsCatalogNameCatalogRolesRouteHandler,
  )
  .openapi(
    getCatalogsCatalogNameCatalogRolesCatalogRoleNameRoute,
    getCatalogsCatalogNameCatalogRolesCatalogRoleNameRouteHandler,
  )
  .openapi(
    putCatalogsCatalogNameCatalogRolesCatalogRoleNameRoute,
    putCatalogsCatalogNameCatalogRolesCatalogRoleNameRouteHandler,
  )
  .openapi(
    deleteCatalogsCatalogNameCatalogRolesCatalogRoleNameRoute,
    deleteCatalogsCatalogNameCatalogRolesCatalogRoleNameRouteHandler,
  )
  .openapi(
    getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesRoute,
    getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesRouteHandler,
  )
  .openapi(
    getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRoute,
    getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRouteHandler,
  )
  .openapi(
    putCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRoute,
    putCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRouteHandler,
  )
  .openapi(
    postCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRoute,
    postCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRouteHandler,
  )

export default app
