import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContactsIdDistrictRoute,
  getContactsIdRoute,
  getContactsIdStudentRoute,
  getContactsRoute,
  getDistrictAdminsIdRoute,
  getDistrictAdminsRoute,
  getDistrictsIdAdminsRoute,
  getDistrictsIdRoute,
  getDistrictsIdSchoolsRoute,
  getDistrictsIdSectionsRoute,
  getDistrictsIdStatusRoute,
  getDistrictsIdStudentsRoute,
  getDistrictsIdTeachersRoute,
  getDistrictsRoute,
  getSchoolAdminsIdRoute,
  getSchoolAdminsIdSchoolsRoute,
  getSchoolAdminsRoute,
  getSchoolsIdDistrictRoute,
  getSchoolsIdRoute,
  getSchoolsIdSectionsRoute,
  getSchoolsIdStudentsRoute,
  getSchoolsIdTeachersRoute,
  getSchoolsRoute,
  getSectionsIdDistrictRoute,
  getSectionsIdRoute,
  getSectionsIdSchoolRoute,
  getSectionsIdStudentsRoute,
  getSectionsIdTeacherRoute,
  getSectionsIdTeachersRoute,
  getSectionsRoute,
  getStudentsIdContactsRoute,
  getStudentsIdDistrictRoute,
  getStudentsIdRoute,
  getStudentsIdSchoolRoute,
  getStudentsIdSectionsRoute,
  getStudentsIdTeachersRoute,
  getStudentsRoute,
  getTeachersIdDistrictRoute,
  getTeachersIdGradeLevelsRoute,
  getTeachersIdRoute,
  getTeachersIdSchoolRoute,
  getTeachersIdSectionsRoute,
  getTeachersIdStudentsRoute,
  getTeachersRoute,
} from './routes'
import {
  getContactsIdDistrictRouteHandler,
  getContactsIdRouteHandler,
  getContactsIdStudentRouteHandler,
  getContactsRouteHandler,
  getDistrictAdminsIdRouteHandler,
  getDistrictAdminsRouteHandler,
  getDistrictsIdAdminsRouteHandler,
  getDistrictsIdRouteHandler,
  getDistrictsIdSchoolsRouteHandler,
  getDistrictsIdSectionsRouteHandler,
  getDistrictsIdStatusRouteHandler,
  getDistrictsIdStudentsRouteHandler,
  getDistrictsIdTeachersRouteHandler,
  getDistrictsRouteHandler,
  getSchoolAdminsIdRouteHandler,
  getSchoolAdminsIdSchoolsRouteHandler,
  getSchoolAdminsRouteHandler,
  getSchoolsIdDistrictRouteHandler,
  getSchoolsIdRouteHandler,
  getSchoolsIdSectionsRouteHandler,
  getSchoolsIdStudentsRouteHandler,
  getSchoolsIdTeachersRouteHandler,
  getSchoolsRouteHandler,
  getSectionsIdDistrictRouteHandler,
  getSectionsIdRouteHandler,
  getSectionsIdSchoolRouteHandler,
  getSectionsIdStudentsRouteHandler,
  getSectionsIdTeacherRouteHandler,
  getSectionsIdTeachersRouteHandler,
  getSectionsRouteHandler,
  getStudentsIdContactsRouteHandler,
  getStudentsIdDistrictRouteHandler,
  getStudentsIdRouteHandler,
  getStudentsIdSchoolRouteHandler,
  getStudentsIdSectionsRouteHandler,
  getStudentsIdTeachersRouteHandler,
  getStudentsRouteHandler,
  getTeachersIdDistrictRouteHandler,
  getTeachersIdGradeLevelsRouteHandler,
  getTeachersIdRouteHandler,
  getTeachersIdSchoolRouteHandler,
  getTeachersIdSectionsRouteHandler,
  getTeachersIdStudentsRouteHandler,
  getTeachersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getContactsRoute, getContactsRouteHandler)
  .openapi(getContactsIdRoute, getContactsIdRouteHandler)
  .openapi(getContactsIdDistrictRoute, getContactsIdDistrictRouteHandler)
  .openapi(getContactsIdStudentRoute, getContactsIdStudentRouteHandler)
  .openapi(getDistrictAdminsRoute, getDistrictAdminsRouteHandler)
  .openapi(getDistrictAdminsIdRoute, getDistrictAdminsIdRouteHandler)
  .openapi(getDistrictsRoute, getDistrictsRouteHandler)
  .openapi(getDistrictsIdRoute, getDistrictsIdRouteHandler)
  .openapi(getDistrictsIdAdminsRoute, getDistrictsIdAdminsRouteHandler)
  .openapi(getDistrictsIdSchoolsRoute, getDistrictsIdSchoolsRouteHandler)
  .openapi(getDistrictsIdSectionsRoute, getDistrictsIdSectionsRouteHandler)
  .openapi(getDistrictsIdStatusRoute, getDistrictsIdStatusRouteHandler)
  .openapi(getDistrictsIdStudentsRoute, getDistrictsIdStudentsRouteHandler)
  .openapi(getDistrictsIdTeachersRoute, getDistrictsIdTeachersRouteHandler)
  .openapi(getSchoolAdminsRoute, getSchoolAdminsRouteHandler)
  .openapi(getSchoolAdminsIdRoute, getSchoolAdminsIdRouteHandler)
  .openapi(getSchoolAdminsIdSchoolsRoute, getSchoolAdminsIdSchoolsRouteHandler)
  .openapi(getSchoolsRoute, getSchoolsRouteHandler)
  .openapi(getSchoolsIdRoute, getSchoolsIdRouteHandler)
  .openapi(getSchoolsIdDistrictRoute, getSchoolsIdDistrictRouteHandler)
  .openapi(getSchoolsIdSectionsRoute, getSchoolsIdSectionsRouteHandler)
  .openapi(getSchoolsIdStudentsRoute, getSchoolsIdStudentsRouteHandler)
  .openapi(getSchoolsIdTeachersRoute, getSchoolsIdTeachersRouteHandler)
  .openapi(getSectionsRoute, getSectionsRouteHandler)
  .openapi(getSectionsIdRoute, getSectionsIdRouteHandler)
  .openapi(getSectionsIdDistrictRoute, getSectionsIdDistrictRouteHandler)
  .openapi(getSectionsIdSchoolRoute, getSectionsIdSchoolRouteHandler)
  .openapi(getSectionsIdStudentsRoute, getSectionsIdStudentsRouteHandler)
  .openapi(getSectionsIdTeacherRoute, getSectionsIdTeacherRouteHandler)
  .openapi(getSectionsIdTeachersRoute, getSectionsIdTeachersRouteHandler)
  .openapi(getStudentsRoute, getStudentsRouteHandler)
  .openapi(getStudentsIdRoute, getStudentsIdRouteHandler)
  .openapi(getStudentsIdContactsRoute, getStudentsIdContactsRouteHandler)
  .openapi(getStudentsIdDistrictRoute, getStudentsIdDistrictRouteHandler)
  .openapi(getStudentsIdSchoolRoute, getStudentsIdSchoolRouteHandler)
  .openapi(getStudentsIdSectionsRoute, getStudentsIdSectionsRouteHandler)
  .openapi(getStudentsIdTeachersRoute, getStudentsIdTeachersRouteHandler)
  .openapi(getTeachersRoute, getTeachersRouteHandler)
  .openapi(getTeachersIdRoute, getTeachersIdRouteHandler)
  .openapi(getTeachersIdDistrictRoute, getTeachersIdDistrictRouteHandler)
  .openapi(getTeachersIdGradeLevelsRoute, getTeachersIdGradeLevelsRouteHandler)
  .openapi(getTeachersIdSchoolRoute, getTeachersIdSchoolRouteHandler)
  .openapi(getTeachersIdSectionsRoute, getTeachersIdSectionsRouteHandler)
  .openapi(getTeachersIdStudentsRoute, getTeachersIdStudentsRouteHandler)

export default app
