import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getStatus200(options?: ClientRequestOptions) {
  return await parseResponse(client.status['200'].$get(undefined, options))
}

export async function getStatus201(options?: ClientRequestOptions) {
  return await parseResponse(client.status['201'].$get(undefined, options))
}

export async function getStatus202(options?: ClientRequestOptions) {
  return await parseResponse(client.status['202'].$get(undefined, options))
}

export async function getStatus203(options?: ClientRequestOptions) {
  return await parseResponse(client.status['203'].$get(undefined, options))
}

export async function getStatus204(options?: ClientRequestOptions) {
  return await parseResponse(client.status['204'].$get(undefined, options))
}

export async function getStatus205(options?: ClientRequestOptions) {
  return await parseResponse(client.status['205'].$get(undefined, options))
}

export async function getStatus206(options?: ClientRequestOptions) {
  return await parseResponse(client.status['206'].$get(undefined, options))
}

export async function getStatus207(options?: ClientRequestOptions) {
  return await parseResponse(client.status['207'].$get(undefined, options))
}

export async function getStatus208(options?: ClientRequestOptions) {
  return await parseResponse(client.status['208'].$get(undefined, options))
}

export async function getStatus218(options?: ClientRequestOptions) {
  return await parseResponse(client.status['218'].$get(undefined, options))
}

export async function getStatus226(options?: ClientRequestOptions) {
  return await parseResponse(client.status['226'].$get(undefined, options))
}

export async function getStatus300(options?: ClientRequestOptions) {
  return await parseResponse(client.status['300'].$get(undefined, options))
}

export async function getStatus301(options?: ClientRequestOptions) {
  return await parseResponse(client.status['301'].$get(undefined, options))
}

export async function getStatus302(options?: ClientRequestOptions) {
  return await parseResponse(client.status['302'].$get(undefined, options))
}

export async function getStatus303(options?: ClientRequestOptions) {
  return await parseResponse(client.status['303'].$get(undefined, options))
}

export async function getStatus304(options?: ClientRequestOptions) {
  return await parseResponse(client.status['304'].$get(undefined, options))
}

export async function getStatus305(options?: ClientRequestOptions) {
  return await parseResponse(client.status['305'].$get(undefined, options))
}

export async function getStatus306(options?: ClientRequestOptions) {
  return await parseResponse(client.status['306'].$get(undefined, options))
}

export async function getStatus307(options?: ClientRequestOptions) {
  return await parseResponse(client.status['307'].$get(undefined, options))
}

export async function getStatus308(options?: ClientRequestOptions) {
  return await parseResponse(client.status['308'].$get(undefined, options))
}

export async function getStatus400(options?: ClientRequestOptions) {
  return await parseResponse(client.status['400'].$get(undefined, options))
}

export async function getStatus401(options?: ClientRequestOptions) {
  return await parseResponse(client.status['401'].$get(undefined, options))
}

export async function getStatus402(options?: ClientRequestOptions) {
  return await parseResponse(client.status['402'].$get(undefined, options))
}

export async function getStatus403(options?: ClientRequestOptions) {
  return await parseResponse(client.status['403'].$get(undefined, options))
}

export async function getStatus404(options?: ClientRequestOptions) {
  return await parseResponse(client.status['404'].$get(undefined, options))
}

export async function getStatus405(options?: ClientRequestOptions) {
  return await parseResponse(client.status['405'].$get(undefined, options))
}

export async function getStatus406(options?: ClientRequestOptions) {
  return await parseResponse(client.status['406'].$get(undefined, options))
}

export async function getStatus407(options?: ClientRequestOptions) {
  return await parseResponse(client.status['407'].$get(undefined, options))
}

export async function getStatus408(options?: ClientRequestOptions) {
  return await parseResponse(client.status['408'].$get(undefined, options))
}

export async function getStatus409(options?: ClientRequestOptions) {
  return await parseResponse(client.status['409'].$get(undefined, options))
}

export async function getStatus410(options?: ClientRequestOptions) {
  return await parseResponse(client.status['410'].$get(undefined, options))
}

export async function getStatus411(options?: ClientRequestOptions) {
  return await parseResponse(client.status['411'].$get(undefined, options))
}

export async function getStatus412(options?: ClientRequestOptions) {
  return await parseResponse(client.status['412'].$get(undefined, options))
}

export async function getStatus413(options?: ClientRequestOptions) {
  return await parseResponse(client.status['413'].$get(undefined, options))
}

export async function getStatus414(options?: ClientRequestOptions) {
  return await parseResponse(client.status['414'].$get(undefined, options))
}

export async function getStatus415(options?: ClientRequestOptions) {
  return await parseResponse(client.status['415'].$get(undefined, options))
}

export async function getStatus416(options?: ClientRequestOptions) {
  return await parseResponse(client.status['416'].$get(undefined, options))
}

export async function getStatus417(options?: ClientRequestOptions) {
  return await parseResponse(client.status['417'].$get(undefined, options))
}

export async function getStatus418(options?: ClientRequestOptions) {
  return await parseResponse(client.status['418'].$get(undefined, options))
}

export async function getStatus419(options?: ClientRequestOptions) {
  return await parseResponse(client.status['419'].$get(undefined, options))
}

export async function getStatus420(options?: ClientRequestOptions) {
  return await parseResponse(client.status['420'].$get(undefined, options))
}

export async function getStatus421(options?: ClientRequestOptions) {
  return await parseResponse(client.status['421'].$get(undefined, options))
}

export async function getStatus422(options?: ClientRequestOptions) {
  return await parseResponse(client.status['422'].$get(undefined, options))
}

export async function getStatus423(options?: ClientRequestOptions) {
  return await parseResponse(client.status['423'].$get(undefined, options))
}

export async function getStatus424(options?: ClientRequestOptions) {
  return await parseResponse(client.status['424'].$get(undefined, options))
}

export async function getStatus425(options?: ClientRequestOptions) {
  return await parseResponse(client.status['425'].$get(undefined, options))
}

export async function getStatus426(options?: ClientRequestOptions) {
  return await parseResponse(client.status['426'].$get(undefined, options))
}

export async function getStatus428(options?: ClientRequestOptions) {
  return await parseResponse(client.status['428'].$get(undefined, options))
}

export async function getStatus429(options?: ClientRequestOptions) {
  return await parseResponse(client.status['429'].$get(undefined, options))
}

export async function getStatus430(options?: ClientRequestOptions) {
  return await parseResponse(client.status['430'].$get(undefined, options))
}

export async function getStatus431(options?: ClientRequestOptions) {
  return await parseResponse(client.status['431'].$get(undefined, options))
}

export async function getStatus440(options?: ClientRequestOptions) {
  return await parseResponse(client.status['440'].$get(undefined, options))
}

export async function getStatus444(options?: ClientRequestOptions) {
  return await parseResponse(client.status['444'].$get(undefined, options))
}

export async function getStatus449(options?: ClientRequestOptions) {
  return await parseResponse(client.status['449'].$get(undefined, options))
}

export async function getStatus450(options?: ClientRequestOptions) {
  return await parseResponse(client.status['450'].$get(undefined, options))
}

export async function getStatus451(options?: ClientRequestOptions) {
  return await parseResponse(client.status['451'].$get(undefined, options))
}

export async function getStatus494(options?: ClientRequestOptions) {
  return await parseResponse(client.status['494'].$get(undefined, options))
}

export async function getStatus495(options?: ClientRequestOptions) {
  return await parseResponse(client.status['495'].$get(undefined, options))
}

export async function getStatus496(options?: ClientRequestOptions) {
  return await parseResponse(client.status['496'].$get(undefined, options))
}

export async function getStatus497(options?: ClientRequestOptions) {
  return await parseResponse(client.status['497'].$get(undefined, options))
}

export async function getStatus498(options?: ClientRequestOptions) {
  return await parseResponse(client.status['498'].$get(undefined, options))
}

export async function getStatus499(options?: ClientRequestOptions) {
  return await parseResponse(client.status['499'].$get(undefined, options))
}

export async function getStatus500(options?: ClientRequestOptions) {
  return await parseResponse(client.status['500'].$get(undefined, options))
}

export async function getStatus501(options?: ClientRequestOptions) {
  return await parseResponse(client.status['501'].$get(undefined, options))
}

export async function getStatus502(options?: ClientRequestOptions) {
  return await parseResponse(client.status['502'].$get(undefined, options))
}

export async function getStatus503(options?: ClientRequestOptions) {
  return await parseResponse(client.status['503'].$get(undefined, options))
}

export async function getStatus504(options?: ClientRequestOptions) {
  return await parseResponse(client.status['504'].$get(undefined, options))
}

export async function getStatus505(options?: ClientRequestOptions) {
  return await parseResponse(client.status['505'].$get(undefined, options))
}

export async function getStatus506(options?: ClientRequestOptions) {
  return await parseResponse(client.status['506'].$get(undefined, options))
}

export async function getStatus507(options?: ClientRequestOptions) {
  return await parseResponse(client.status['507'].$get(undefined, options))
}

export async function getStatus508(options?: ClientRequestOptions) {
  return await parseResponse(client.status['508'].$get(undefined, options))
}

export async function getStatus509(options?: ClientRequestOptions) {
  return await parseResponse(client.status['509'].$get(undefined, options))
}

export async function getStatus510(options?: ClientRequestOptions) {
  return await parseResponse(client.status['510'].$get(undefined, options))
}

export async function getStatus511(options?: ClientRequestOptions) {
  return await parseResponse(client.status['511'].$get(undefined, options))
}

export async function getStatus520(options?: ClientRequestOptions) {
  return await parseResponse(client.status['520'].$get(undefined, options))
}

export async function getStatus512(options?: ClientRequestOptions) {
  return await parseResponse(client.status['512'].$get(undefined, options))
}

export async function getStatus522(options?: ClientRequestOptions) {
  return await parseResponse(client.status['522'].$get(undefined, options))
}

export async function getStatus523(options?: ClientRequestOptions) {
  return await parseResponse(client.status['523'].$get(undefined, options))
}

export async function getStatus524(options?: ClientRequestOptions) {
  return await parseResponse(client.status['524'].$get(undefined, options))
}

export async function getStatus525(options?: ClientRequestOptions) {
  return await parseResponse(client.status['525'].$get(undefined, options))
}

export async function getStatus526(options?: ClientRequestOptions) {
  return await parseResponse(client.status['526'].$get(undefined, options))
}

export async function getStatus527(options?: ClientRequestOptions) {
  return await parseResponse(client.status['527'].$get(undefined, options))
}

export async function getStatus529(options?: ClientRequestOptions) {
  return await parseResponse(client.status['529'].$get(undefined, options))
}

export async function getStatus530(options?: ClientRequestOptions) {
  return await parseResponse(client.status['530'].$get(undefined, options))
}

export async function getStatus598(options?: ClientRequestOptions) {
  return await parseResponse(client.status['598'].$get(undefined, options))
}

export async function getStatus100(options?: ClientRequestOptions) {
  return await parseResponse(client.status['100'].$get(undefined, options))
}

export async function getStatus101(options?: ClientRequestOptions) {
  return await parseResponse(client.status['101'].$get(undefined, options))
}

export async function getStatus102(options?: ClientRequestOptions) {
  return await parseResponse(client.status['102'].$get(undefined, options))
}

export async function getStatus103(options?: ClientRequestOptions) {
  return await parseResponse(client.status['103'].$get(undefined, options))
}
