import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStatus100Route,
  getStatus101Route,
  getStatus102Route,
  getStatus103Route,
  getStatus200Route,
  getStatus201Route,
  getStatus202Route,
  getStatus203Route,
  getStatus204Route,
  getStatus205Route,
  getStatus206Route,
  getStatus207Route,
  getStatus208Route,
  getStatus218Route,
  getStatus226Route,
  getStatus300Route,
  getStatus301Route,
  getStatus302Route,
  getStatus303Route,
  getStatus304Route,
  getStatus305Route,
  getStatus306Route,
  getStatus307Route,
  getStatus308Route,
  getStatus400Route,
  getStatus401Route,
  getStatus402Route,
  getStatus403Route,
  getStatus404Route,
  getStatus405Route,
  getStatus406Route,
  getStatus407Route,
  getStatus408Route,
  getStatus409Route,
  getStatus410Route,
  getStatus411Route,
  getStatus412Route,
  getStatus413Route,
  getStatus414Route,
  getStatus415Route,
  getStatus416Route,
  getStatus417Route,
  getStatus418Route,
  getStatus419Route,
  getStatus420Route,
  getStatus421Route,
  getStatus422Route,
  getStatus423Route,
  getStatus424Route,
  getStatus425Route,
  getStatus426Route,
  getStatus428Route,
  getStatus429Route,
  getStatus430Route,
  getStatus431Route,
  getStatus440Route,
  getStatus444Route,
  getStatus449Route,
  getStatus450Route,
  getStatus451Route,
  getStatus494Route,
  getStatus495Route,
  getStatus496Route,
  getStatus497Route,
  getStatus498Route,
  getStatus499Route,
  getStatus500Route,
  getStatus501Route,
  getStatus502Route,
  getStatus503Route,
  getStatus504Route,
  getStatus505Route,
  getStatus506Route,
  getStatus507Route,
  getStatus508Route,
  getStatus509Route,
  getStatus510Route,
  getStatus511Route,
  getStatus512Route,
  getStatus520Route,
  getStatus522Route,
  getStatus523Route,
  getStatus524Route,
  getStatus525Route,
  getStatus526Route,
  getStatus527Route,
  getStatus529Route,
  getStatus530Route,
  getStatus598Route,
} from './routes'
import {
  getStatus100RouteHandler,
  getStatus101RouteHandler,
  getStatus102RouteHandler,
  getStatus103RouteHandler,
  getStatus200RouteHandler,
  getStatus201RouteHandler,
  getStatus202RouteHandler,
  getStatus203RouteHandler,
  getStatus204RouteHandler,
  getStatus205RouteHandler,
  getStatus206RouteHandler,
  getStatus207RouteHandler,
  getStatus208RouteHandler,
  getStatus218RouteHandler,
  getStatus226RouteHandler,
  getStatus300RouteHandler,
  getStatus301RouteHandler,
  getStatus302RouteHandler,
  getStatus303RouteHandler,
  getStatus304RouteHandler,
  getStatus305RouteHandler,
  getStatus306RouteHandler,
  getStatus307RouteHandler,
  getStatus308RouteHandler,
  getStatus400RouteHandler,
  getStatus401RouteHandler,
  getStatus402RouteHandler,
  getStatus403RouteHandler,
  getStatus404RouteHandler,
  getStatus405RouteHandler,
  getStatus406RouteHandler,
  getStatus407RouteHandler,
  getStatus408RouteHandler,
  getStatus409RouteHandler,
  getStatus410RouteHandler,
  getStatus411RouteHandler,
  getStatus412RouteHandler,
  getStatus413RouteHandler,
  getStatus414RouteHandler,
  getStatus415RouteHandler,
  getStatus416RouteHandler,
  getStatus417RouteHandler,
  getStatus418RouteHandler,
  getStatus419RouteHandler,
  getStatus420RouteHandler,
  getStatus421RouteHandler,
  getStatus422RouteHandler,
  getStatus423RouteHandler,
  getStatus424RouteHandler,
  getStatus425RouteHandler,
  getStatus426RouteHandler,
  getStatus428RouteHandler,
  getStatus429RouteHandler,
  getStatus430RouteHandler,
  getStatus431RouteHandler,
  getStatus440RouteHandler,
  getStatus444RouteHandler,
  getStatus449RouteHandler,
  getStatus450RouteHandler,
  getStatus451RouteHandler,
  getStatus494RouteHandler,
  getStatus495RouteHandler,
  getStatus496RouteHandler,
  getStatus497RouteHandler,
  getStatus498RouteHandler,
  getStatus499RouteHandler,
  getStatus500RouteHandler,
  getStatus501RouteHandler,
  getStatus502RouteHandler,
  getStatus503RouteHandler,
  getStatus504RouteHandler,
  getStatus505RouteHandler,
  getStatus506RouteHandler,
  getStatus507RouteHandler,
  getStatus508RouteHandler,
  getStatus509RouteHandler,
  getStatus510RouteHandler,
  getStatus511RouteHandler,
  getStatus512RouteHandler,
  getStatus520RouteHandler,
  getStatus522RouteHandler,
  getStatus523RouteHandler,
  getStatus524RouteHandler,
  getStatus525RouteHandler,
  getStatus526RouteHandler,
  getStatus527RouteHandler,
  getStatus529RouteHandler,
  getStatus530RouteHandler,
  getStatus598RouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getStatus200Route, getStatus200RouteHandler)
  .openapi(getStatus201Route, getStatus201RouteHandler)
  .openapi(getStatus202Route, getStatus202RouteHandler)
  .openapi(getStatus203Route, getStatus203RouteHandler)
  .openapi(getStatus204Route, getStatus204RouteHandler)
  .openapi(getStatus205Route, getStatus205RouteHandler)
  .openapi(getStatus206Route, getStatus206RouteHandler)
  .openapi(getStatus207Route, getStatus207RouteHandler)
  .openapi(getStatus208Route, getStatus208RouteHandler)
  .openapi(getStatus218Route, getStatus218RouteHandler)
  .openapi(getStatus226Route, getStatus226RouteHandler)
  .openapi(getStatus300Route, getStatus300RouteHandler)
  .openapi(getStatus301Route, getStatus301RouteHandler)
  .openapi(getStatus302Route, getStatus302RouteHandler)
  .openapi(getStatus303Route, getStatus303RouteHandler)
  .openapi(getStatus304Route, getStatus304RouteHandler)
  .openapi(getStatus305Route, getStatus305RouteHandler)
  .openapi(getStatus306Route, getStatus306RouteHandler)
  .openapi(getStatus307Route, getStatus307RouteHandler)
  .openapi(getStatus308Route, getStatus308RouteHandler)
  .openapi(getStatus400Route, getStatus400RouteHandler)
  .openapi(getStatus401Route, getStatus401RouteHandler)
  .openapi(getStatus402Route, getStatus402RouteHandler)
  .openapi(getStatus403Route, getStatus403RouteHandler)
  .openapi(getStatus404Route, getStatus404RouteHandler)
  .openapi(getStatus405Route, getStatus405RouteHandler)
  .openapi(getStatus406Route, getStatus406RouteHandler)
  .openapi(getStatus407Route, getStatus407RouteHandler)
  .openapi(getStatus408Route, getStatus408RouteHandler)
  .openapi(getStatus409Route, getStatus409RouteHandler)
  .openapi(getStatus410Route, getStatus410RouteHandler)
  .openapi(getStatus411Route, getStatus411RouteHandler)
  .openapi(getStatus412Route, getStatus412RouteHandler)
  .openapi(getStatus413Route, getStatus413RouteHandler)
  .openapi(getStatus414Route, getStatus414RouteHandler)
  .openapi(getStatus415Route, getStatus415RouteHandler)
  .openapi(getStatus416Route, getStatus416RouteHandler)
  .openapi(getStatus417Route, getStatus417RouteHandler)
  .openapi(getStatus418Route, getStatus418RouteHandler)
  .openapi(getStatus419Route, getStatus419RouteHandler)
  .openapi(getStatus420Route, getStatus420RouteHandler)
  .openapi(getStatus421Route, getStatus421RouteHandler)
  .openapi(getStatus422Route, getStatus422RouteHandler)
  .openapi(getStatus423Route, getStatus423RouteHandler)
  .openapi(getStatus424Route, getStatus424RouteHandler)
  .openapi(getStatus425Route, getStatus425RouteHandler)
  .openapi(getStatus426Route, getStatus426RouteHandler)
  .openapi(getStatus428Route, getStatus428RouteHandler)
  .openapi(getStatus429Route, getStatus429RouteHandler)
  .openapi(getStatus430Route, getStatus430RouteHandler)
  .openapi(getStatus431Route, getStatus431RouteHandler)
  .openapi(getStatus440Route, getStatus440RouteHandler)
  .openapi(getStatus444Route, getStatus444RouteHandler)
  .openapi(getStatus449Route, getStatus449RouteHandler)
  .openapi(getStatus450Route, getStatus450RouteHandler)
  .openapi(getStatus451Route, getStatus451RouteHandler)
  .openapi(getStatus494Route, getStatus494RouteHandler)
  .openapi(getStatus495Route, getStatus495RouteHandler)
  .openapi(getStatus496Route, getStatus496RouteHandler)
  .openapi(getStatus497Route, getStatus497RouteHandler)
  .openapi(getStatus498Route, getStatus498RouteHandler)
  .openapi(getStatus499Route, getStatus499RouteHandler)
  .openapi(getStatus500Route, getStatus500RouteHandler)
  .openapi(getStatus501Route, getStatus501RouteHandler)
  .openapi(getStatus502Route, getStatus502RouteHandler)
  .openapi(getStatus503Route, getStatus503RouteHandler)
  .openapi(getStatus504Route, getStatus504RouteHandler)
  .openapi(getStatus505Route, getStatus505RouteHandler)
  .openapi(getStatus506Route, getStatus506RouteHandler)
  .openapi(getStatus507Route, getStatus507RouteHandler)
  .openapi(getStatus508Route, getStatus508RouteHandler)
  .openapi(getStatus509Route, getStatus509RouteHandler)
  .openapi(getStatus510Route, getStatus510RouteHandler)
  .openapi(getStatus511Route, getStatus511RouteHandler)
  .openapi(getStatus520Route, getStatus520RouteHandler)
  .openapi(getStatus512Route, getStatus512RouteHandler)
  .openapi(getStatus522Route, getStatus522RouteHandler)
  .openapi(getStatus523Route, getStatus523RouteHandler)
  .openapi(getStatus524Route, getStatus524RouteHandler)
  .openapi(getStatus525Route, getStatus525RouteHandler)
  .openapi(getStatus526Route, getStatus526RouteHandler)
  .openapi(getStatus527Route, getStatus527RouteHandler)
  .openapi(getStatus529Route, getStatus529RouteHandler)
  .openapi(getStatus530Route, getStatus530RouteHandler)
  .openapi(getStatus598Route, getStatus598RouteHandler)
  .openapi(getStatus100Route, getStatus100RouteHandler)
  .openapi(getStatus101Route, getStatus101RouteHandler)
  .openapi(getStatus102Route, getStatus102RouteHandler)
  .openapi(getStatus103Route, getStatus103RouteHandler)

export default app
