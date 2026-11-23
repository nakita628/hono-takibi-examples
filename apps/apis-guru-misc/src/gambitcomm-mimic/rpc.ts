import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postMimicAccessAddUserAgentsMask(
  args: InferRequestType<(typeof client.mimic.access.add)[':user'][':agents'][':mask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.access.add[':user'][':agents'][':mask'].$post(args, options),
  )
}

export async function deleteMimicAccessDelUser(
  args: InferRequestType<(typeof client.mimic.access.del)[':user']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.access.del[':user'].$delete(args, options))
}

export async function getMimicAccessGetAcldb(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.access.get.acldb.$get(undefined, options))
}

export async function getMimicAccessGetAdmindir(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.access.get.admindir.$get(undefined, options))
}

export async function getMimicAccessGetAdminuser(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.access.get.adminuser.$get(undefined, options))
}

export async function getMimicAccessGetEnabled(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.access.get.enabled.$get(undefined, options))
}

export async function getMimicAccessList(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.access.list.$get(undefined, options))
}

export async function putMimicAccessLoadFilename(
  args: InferRequestType<(typeof client.mimic.access.load)[':filename']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.access.load[':filename'].$put(args, options))
}

export async function putMimicAccessSaveFilename(
  args: InferRequestType<(typeof client.mimic.access.save)[':filename']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.access.save[':filename'].$put(args, options))
}

export async function putMimicAccessSetAcldbDatabaseName(
  args: InferRequestType<(typeof client.mimic.access.set.acldb)[':databaseName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.access.set.acldb[':databaseName'].$put(args, options))
}

export async function putMimicAccessSetEnabledEnabledOrNot(
  args: InferRequestType<(typeof client.mimic.access.set.enabled)[':enabledOrNot']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.access.set.enabled[':enabledOrNot'].$put(args, options))
}

export async function postMimicAgentAgentNumAddIP(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['add'][':IP']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].add[':IP'].$post(args, options))
}

export async function postMimicAgentAgentNumFromAddIPPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['from']['add'][':IP'][':port']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].from.add[':IP'][':port'].$post(args, options),
  )
}

export async function deleteMimicAgentAgentNumFromDeleteIPPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['from']['delete'][':IP'][':port']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].from.delete[':IP'][':port'].$delete(args, options),
  )
}

export async function getMimicAgentAgentNumFromList(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].from.list.$get(args, options))
}

export async function getMimicAgentAgentNumGetChanged(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.changed.$get(args, options))
}

export async function getMimicAgentAgentNumGetConfigChanged(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.config_changed.$get(args, options))
}

export async function getMimicAgentAgentNumGetDelay(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.delay.$get(args, options))
}

export async function getMimicAgentAgentNumGetDrops(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.drops.$get(args, options))
}

export async function getMimicAgentAgentNumGetHost(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.host.$get(args, options))
}

export async function getMimicAgentAgentNumGetInformTimeout(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.inform_timeout.$get(args, options))
}

export async function getMimicAgentAgentNumGetInterface(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.interface.$get(args, options))
}

export async function getMimicAgentAgentNumGetMask(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.mask.$get(args, options))
}

export async function getMimicAgentAgentNumGetMibs(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.mibs.$get(args, options))
}

export async function getMimicAgentAgentNumGetNumStarts(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.num_starts.$get(args, options))
}

export async function getMimicAgentAgentNumGetOiddir(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.oiddir.$get(args, options))
}

export async function getMimicAgentAgentNumGetOwner(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.owner.$get(args, options))
}

export async function getMimicAgentAgentNumGetPdusize(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.pdusize.$get(args, options))
}

export async function getMimicAgentAgentNumGetPort(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.port.$get(args, options))
}

export async function getMimicAgentAgentNumGetPrivdir(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.privdir.$get(args, options))
}

export async function getMimicAgentAgentNumGetProtocol(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.protocol.$get(args, options))
}

export async function getMimicAgentAgentNumGetRead(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.read.$get(args, options))
}

export async function getMimicAgentAgentNumGetScen(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.scen.$get(args, options))
}

export async function getMimicAgentAgentNumGetSim(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.sim.$get(args, options))
}

export async function getMimicAgentAgentNumGetStart(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.start.$get(args, options))
}

export async function getMimicAgentAgentNumGetState(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.state.$get(args, options))
}

export async function getMimicAgentAgentNumGetStateChanged(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.state_changed.$get(args, options))
}

export async function getMimicAgentAgentNumGetStatistics(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.statistics.$get(args, options))
}

export async function getMimicAgentAgentNumGetTrace(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.trace.$get(args, options))
}

export async function getMimicAgentAgentNumGetValidate(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.validate.$get(args, options))
}

export async function getMimicAgentAgentNumGetWrite(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].get.write.$get(args, options))
}

export async function putMimicAgentAgentNumHalt(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['halt']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].halt.$put(args, options))
}

export async function postMimicAgentAgentNumIpaliasAddIPPortMaskInterface(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['ipalias']['add'][':IP'][':port'][':mask'][':interface']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].ipalias.add[':IP'][':port'][':mask'][':interface'].$post(
      args,
      options,
    ),
  )
}

export async function deleteMimicAgentAgentNumIpaliasDeleteIPPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['ipalias']['delete'][':IP'][':port']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].ipalias.delete[':IP'][':port'].$delete(args, options),
  )
}

export async function getMimicAgentAgentNumIpaliasList(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].ipalias.list.$get(args, options))
}

export async function putMimicAgentAgentNumIpaliasStartIPPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['ipalias']['start'][':IP'][':port']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].ipalias.start[':IP'][':port'].$put(args, options),
  )
}

export async function getMimicAgentAgentNumIpaliasStatusIPPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['ipalias']['status'][':IP'][':port']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].ipalias.status[':IP'][':port'].$get(args, options),
  )
}

export async function putMimicAgentAgentNumIpaliasStopIPPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['ipalias']['stop'][':IP'][':port']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].ipalias.stop[':IP'][':port'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumPause(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['pause']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].pause.$put(args, options))
}

export async function getMimicAgentAgentNumProtocolMsgCoapGetArgs(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.coap.get.args.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgCoapGetConfig(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.coap.get.config.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgCoapGetStatistics(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.coap.get.statistics.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgCoapGetTrace(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.coap.get.trace.$get(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['set']['config'][':argument'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.coap.set.config[':argument'][':value'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNot(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['set']['trace'][':enableOrNot']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.coap.set.trace[':enableOrNot'].$put(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgDhcpGetArgs(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.args.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgDhcpGetConfig(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.config.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgDhcpGetStatistics(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.statistics.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgDhcpGetTrace(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.trace.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgDhcpParams(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['params']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.dhcp.params.$get(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['set']['config'][':argument'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.dhcp.set.config[':argument'][':value'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNot(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['set']['trace'][':enableOrNot']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.dhcp.set.trace[':enableOrNot'].$put(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgIpmiGetArgs(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.args.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgIpmiGetConfig(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.config.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgIpmiGetStatistics(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.statistics.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgIpmiGetTrace(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.trace.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgIpmiGetAttr(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get'][':attr']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ipmi.get[':attr'].$get(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set']['config'][':argument'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ipmi.set.config[':argument'][':value'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNot(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set']['trace'][':enableOrNot']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ipmi.set.trace[':enableOrNot'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgIpmiSetAttrValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set'][':attr'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ipmi.set[':attr'][':value'].$put(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgMqttClientGetProtstate(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['protstate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.get.protstate.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgMqttClientGetState(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['state']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.get.state.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgMqttClientMessageCard(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['card']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.message.card.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttr(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['get'][':msgNum'][':attr']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.message.get[':msgNum'][':attr'].$get(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientMessageSetMsgNumAttrValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['set'][':msgNum'][':attr'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.message.set[':msgNum'][':attr'][
      ':value'
    ].$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientResubscribeSubNum(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['resubscribe'][':subNum']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.resubscribe[':subNum'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientRuntimeAbort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['abort']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.runtime.abort.$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientRuntimeConnect(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['connect']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.runtime.connect.$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientRuntimeDisconnect(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['disconnect']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.runtime.disconnect.$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientSetBrokerBrokerAddr(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['broker'][':brokerAddr']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.broker[':brokerAddr'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientSetCleansessionCleanOrNot(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['cleansession'][':cleanOrNot']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.cleansession[':cleanOrNot'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientSetClientidClientID(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['clientid'][':clientID']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.clientid[':clientID'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientSetKeepaliveAliveTime(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['keepalive'][':aliveTime']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.keepalive[':aliveTime'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientSetOnDisconnectAction(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['on_disconnect'][':action']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.on_disconnect[':action'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientSetPasswordPassword(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['password'][':password']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.password[':password'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientSetPortPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['port'][':port']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.port[':port'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientSetUsernameUsername(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['username'][':username']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.username[':username'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientSetWillmsgMsg(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willmsg'][':msg']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.willmsg[':msg'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientSetWillqosQos(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willqos'][':qos']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.willqos[':qos'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientSetWillretainRetain(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willretain'][':retain']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.willretain[':retain'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientSetWilltopicTopic(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willtopic'][':topic']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.willtopic[':topic'].$put(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCard(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['card']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.subscribe.card.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttr(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['get'][':subNum'][':attr']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.subscribe.get[':subNum'][':attr'].$get(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientSubscribeSetSubNumAttrValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['set'][':subNum'][':attr'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.subscribe.set[':subNum'][':attr'][
      ':value'
    ].$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttClientUnsubscribeSubNum(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['unsubscribe'][':subNum']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.unsubscribe[':subNum'].$put(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumProtocolMsgMqttGetArgs(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.args.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgMqttGetConfig(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.config.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgMqttGetStatistics(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.statistics.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgMqttGetTrace(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.trace.$get(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttSetConfigArgumentValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['set']['config'][':argument'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.set.config[':argument'][':value'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgMqttSetTraceEnableOrNot(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['set']['trace'][':enableOrNot']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.mqtt.set.trace[':enableOrNot'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalInterval(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change']['dfs_interval'][':interval']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.netflow.flow.change.dfs_interval[':interval'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalInterval(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change']['tfs_interval'][':interval']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.netflow.flow.change.tfs_interval[':interval'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change'][':flowset-uid'][':field-num'][':attr'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.netflow.flow.change[':flowset-uid'][':field-num'][
      ':attr'
    ][':value'].$put(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgNetflowFlowList(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.netflow.flow.list.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgNetflowGetArgs(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.netflow.get.args.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgNetflowGetConfig(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.netflow.get.config.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgNetflowGetStatistics(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.netflow.get.statistics.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgNetflowGetTrace(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.netflow.get.trace.$get(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgNetflowHalt(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['halt']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.netflow.halt.$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgNetflowReload(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['reload']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.netflow.reload.$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgNetflowResume(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['resume']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.netflow.resume.$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIP(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['collector'][':collectorIP']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.netflow.set.collector[':collectorIP'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['config'][':argument'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.netflow.set.config[':argument'][':value'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileName(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['filename'][':fileName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.netflow.set.filename[':fileName'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNot(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['trace'][':enableOrNot']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.netflow.set.trace[':enableOrNot'].$put(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumProtocolMsgProxyGetArgs(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.proxy.get.args.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgProxyGetConfig(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.proxy.get.config.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgProxyGetStatistics(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.proxy.get.statistics.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgProxyGetTrace(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.proxy.get.trace.$get(args, options),
  )
}

export async function postMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['add'][':port'][':target'][':targetPort']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.proxy.port.add[':port'][':target'][
      ':targetPort'
    ].$post(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['isStarted'][':port']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.proxy.port.isStarted[':port'].$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgProxyPortList(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.proxy.port.list.$get(args, options),
  )
}

export async function deleteMimicAgentAgentNumProtocolMsgProxyPortRemovePort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['remove'][':port']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.proxy.port.remove[':port'].$delete(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgProxyPortStartPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['start'][':port']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.proxy.port.start[':port'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgProxyPortStopPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['stop'][':port']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.proxy.port.stop[':port'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['set']['config'][':argument'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.proxy.set.config[':argument'][':value'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNot(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['set']['trace'][':enableOrNot']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.proxy.set.trace[':enableOrNot'].$put(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSflowGetArgs(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.sflow.get.args.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSflowGetConfig(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.sflow.get.config.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSflowGetStatistics(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.sflow.get.statistics.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSflowGetTrace(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.sflow.get.trace.$get(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSflowHalt(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['halt']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.sflow.halt.$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSflowReload(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['reload']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.sflow.reload.$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSflowResume(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['resume']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.sflow.resume.$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['set']['config'][':argument'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.sflow.set.config[':argument'][':value'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNot(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['set']['trace'][':enableOrNot']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.sflow.set.trace[':enableOrNot'].$put(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSnmptcpGetArgs(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.args.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSnmptcpGetConfig(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.config.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSnmptcpGetStatistics(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.statistics.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSnmptcpGetTrace(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.trace.$get(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['disable'][':ipaddress'][':port']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.disable[':ipaddress'][
      ':port'
    ].$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['enable'][':ipaddress'][':port']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.enable[':ipaddress'][':port'].$put(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.isenabled[':ipaddress'][
      ':port'
    ].$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasList(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.list.$get(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['set']['config'][':argument'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmptcp.set.config[':argument'][':value'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNot(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['set']['trace'][':enableOrNot']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmptcp.set.trace[':enableOrNot'].$put(
      args,
      options,
    ),
  )
}

export async function postMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyView(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['add'][':groupName'][':prefix'][':securityModel'][':securityLevel'][':contextMatch'][':readView'][':writeView'][':notifyView']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.access.add[':groupName'][':prefix'][
      ':securityModel'
    ][':securityLevel'][':contextMatch'][':readView'][':writeView'][':notifyView'].$post(
      args,
      options,
    ),
  )
}

export async function deleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClear(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['clear']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.access.clear.$delete(args, options),
  )
}

export async function deleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessName(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['del'][':accessName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.access.del[':accessName'].$delete(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSnmpv3AccessList(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.access.list.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSnmpv3GetConfig(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.config.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineid(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['context_engineid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.context_engineid.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineboots(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineboots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.engineboots.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineid(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.engineid.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetime(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['enginetime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.enginetime.$get(args, options),
  )
}

export async function postMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityName(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['add'][':groupName'][':securityModel'][':securityName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.group.add[':groupName'][':securityModel'][
      ':securityName'
    ].$post(args, options),
  )
}

export async function deleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClear(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['clear']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.group.clear.$delete(args, options),
  )
}

export async function deleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupName(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['del'][':groupName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.group.del[':groupName'].$delete(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSnmpv3GroupList(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.group.list.$get(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['set']['config'][':parameter'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.set.config[':parameter'][':value'].$put(
      args,
      options,
    ),
  )
}

export async function postMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['add'][':userName'][':securityName'][':authProtocol'][':authKey'][':privProtocol'][':privKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.user.add[':userName'][':securityName'][
      ':authProtocol'
    ][':authKey'][':privProtocol'][':privKey'].$post(args, options),
  )
}

export async function deleteMimicAgentAgentNumProtocolMsgSnmpv3UserClear(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['clear']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.user.clear.$delete(args, options),
  )
}

export async function deleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserName(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['del'][':userName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.user.del[':userName'].$delete(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSnmpv3UserList(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.user.list.$get(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSnmpv3UsmSave(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['usm']['save']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.usm.save.$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilename(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['usm']['saveas'][':filename']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.usm.saveas[':filename'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSnmpv3VacmSave(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['vacm']['save']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.vacm.save.$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilename(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['vacm']['saveas'][':filename']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.vacm.saveas[':filename'].$put(
      args,
      options,
    ),
  )
}

export async function postMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMask(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['add'][':viewName'][':viewType'][':subtree'][':mask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.view.add[':viewName'][':viewType'][
      ':subtree'
    ][':mask'].$post(args, options),
  )
}

export async function deleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClear(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['clear']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.view.clear.$delete(args, options),
  )
}

export async function deleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewName(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['del'][':viewName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.view.del[':viewName'].$delete(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSnmpv3ViewList(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.snmpv3.view.list.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSshGetArgs(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ssh.get.args.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSshGetConfig(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ssh.get.config.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSshGetStatistics(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ssh.get.statistics.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSshGetTrace(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ssh.get.trace.$get(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['disable'][':ipaddress'][':port']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.disable[':ipaddress'][':port'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['enable'][':ipaddress'][':port']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.enable[':ipaddress'][':port'].$put(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.isenabled[':ipaddress'][':port'].$get(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSshIpaliasList(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.list.$get(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['set']['config'][':argument'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ssh.set.config[':argument'][':value'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNot(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['set']['trace'][':enableOrNot']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.ssh.set.trace[':enableOrNot'].$put(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSyslogGetArgs(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.syslog.get.args.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSyslogGetConfig(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.syslog.get.config.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSyslogGetStatistics(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.syslog.get.statistics.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSyslogGetTrace(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.syslog.get.trace.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgSyslogGetAttr(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get'][':attr']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.syslog.get[':attr'].$get(args, options),
  )
}

export async function postMimicAgentAgentNumProtocolMsgSyslogSendPri(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['send'][':pri']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.syslog.send[':pri'].$post(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set']['config'][':argument'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.syslog.set.config[':argument'][':value'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNot(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set']['trace'][':enableOrNot']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.syslog.set.trace[':enableOrNot'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgSyslogSetAttrValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set'][':attr'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.syslog.set[':attr'][':value'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPassword(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['logon'][':connectionID'][':user'][':password']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.connection.logon[':connectionID'][':user'][
      ':password'
    ].$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommand(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['request'][':connectionID'][':command']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.connection.request[':connectionID'][
      ':command'
    ].$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalName(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['signal'][':connectionID'][':signalName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.connection.signal[':connectionID'][
      ':signalName'
    ].$put(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTelnetGetArgs(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.get.args.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTelnetGetConfig(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.get.config.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTelnetGetStatistics(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.get.statistics.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTelnetGetTrace(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.get.trace.$get(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['disable'][':ipaddress'][':port']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.disable[':ipaddress'][':port'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['enable'][':ipaddress'][':port']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.enable[':ipaddress'][':port'].$put(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.isenabled[':ipaddress'][
      ':port'
    ].$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTelnetIpaliasList(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.list.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTelnetServerGetConnections(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.connections.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymap(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['keymap']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.keymap.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdb(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['rulesdb']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.rulesdb.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTelnetServerGetState(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['state']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.state.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdb(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['userdb']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.userdb.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTelnetServerGetUsers(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.users.$get(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['set']['config'][':argument'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.set.config[':argument'][':value'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNot(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['set']['trace'][':enableOrNot']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.telnet.set.trace[':enableOrNot'].$put(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTftpGetArgs(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tftp.get.args.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTftpGetConfig(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tftp.get.config.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTftpGetStatistics(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tftp.get.statistics.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTftpGetTrace(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tftp.get.trace.$get(args, options),
  )
}

export async function postMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfile(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['session']['read']['server'][':srcfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tftp.session.read.server[':srcfile'].$post(
      args,
      options,
    ),
  )
}

export async function postMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfile(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['session']['write']['server'][':srcfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tftp.session.write.server[':srcfile'].$post(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['set']['config'][':argument'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tftp.set.config[':argument'][':value'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNot(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['set']['trace'][':enableOrNot']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tftp.set.trace[':enableOrNot'].$put(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameter(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['get'][':parameter']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].get[':parameter'].$get(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['set'][':parameter'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].set[':parameter'][
      ':value'
    ].$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgTftpSessionIDStart(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['start']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].start.$put(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTftpSessionIDStatus(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].status.$get(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgTftpSessionIDStop(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['stop']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].stop.$put(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTodGetArgs(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tod.get.args.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTodGetConfig(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tod.get.config.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTodGetStatistics(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tod.get.statistics.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTodGetTrace(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tod.get.trace.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetries(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['gettime']['server'][':serverAddr']['port'][':portNum']['script'][':scriptName']['timeout'][':timeSec']['retries'][':numRetries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tod.gettime.server[':serverAddr'].port[
      ':portNum'
    ].script[':scriptName'].timeout[':timeSec'].retries[':numRetries'].$get(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['set']['config'][':argument'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tod.set.config[':argument'][':value'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNot(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['set']['trace'][':enableOrNot']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.tod.set.trace[':enableOrNot'].$put(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgWebGetArgs(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.web.get.args.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgWebGetConfig(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.web.get.config.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgWebGetStatistics(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.web.get.statistics.$get(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgWebGetTrace(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.web.get.trace.$get(args, options),
  )
}

export async function postMimicAgentAgentNumProtocolMsgWebPortAddPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['add'][':port']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.web.port.add[':port'].$post(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolMsgWebPortExistsPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['exists'][':port']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.web.port.exists[':port'].$get(args, options),
  )
}

export async function deleteMimicAgentAgentNumProtocolMsgWebPortRemovePort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['remove'][':port']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.web.port.remove[':port'].$delete(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersion(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['set'][':port'][':protocol'][':version']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.web.port.set[':port'][':protocol'][
      ':version'
    ].$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgWebPortStartPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['start'][':port']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.web.port.start[':port'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgWebPortStopPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['stop'][':port']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.web.port.stop[':port'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValue(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['set']['config'][':argument'][':value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.web.set.config[':argument'][':value'].$put(
      args,
      options,
    ),
  )
}

export async function putMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNot(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['set']['trace'][':enableOrNot']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol.msg.web.set.trace[':enableOrNot'].$put(args, options),
  )
}

export async function getMimicAgentAgentNumProtocolProtGetConfig(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol'][':prot']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].protocol[':prot'].get.config.$get(args, options),
  )
}

export async function putMimicAgentAgentNumReload(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['reload']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].reload.$put(args, options))
}

export async function deleteMimicAgentAgentNumRemove(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['remove']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].remove.$delete(args, options))
}

export async function putMimicAgentAgentNumResume(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['resume']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].resume.$put(args, options))
}

export async function putMimicAgentAgentNumSave(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['save']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].save.$put(args, options))
}

export async function putMimicAgentAgentNumSetDelayDelay(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['set']['delay'][':delay']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].set.delay[':delay'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumSetDropsDrops(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['set']['drops'][':drops']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].set.drops[':drops'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumSetHostHost(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['host'][':host']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].set.host[':host'].$put(args, options))
}

export async function putMimicAgentAgentNumSetInformTimeoutInformTimeout(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['set']['inform_timeout'][':inform_timeout']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].set.inform_timeout[':inform_timeout'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumSetInterfaceInterface(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['set']['interface'][':interface']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].set.interface[':interface'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumSetMaskMask(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['mask'][':mask']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].set.mask[':mask'].$put(args, options))
}

export async function putMimicAgentAgentNumSetMibs(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['mibs']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].set.mibs.$put(args, options))
}

export async function putMimicAgentAgentNumSetOiddirOiddir(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['set']['oiddir'][':oiddir']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].set.oiddir[':oiddir'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumSetOwnerOwner(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['set']['owner'][':owner']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].set.owner[':owner'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumSetPdusizePdusize(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['set']['pdusize'][':pdusize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].set.pdusize[':pdusize'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumSetPortPort(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['port'][':port']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].set.port[':port'].$put(args, options))
}

export async function putMimicAgentAgentNumSetPrivdirPrivdir(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['set']['privdir'][':privdir']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].set.privdir[':privdir'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumSetProtocol(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['protocol']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].set.protocol.$put(args, options))
}

export async function putMimicAgentAgentNumSetReadRead(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['read'][':read']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].set.read[':read'].$put(args, options))
}

export async function putMimicAgentAgentNumSetStartStart(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['set']['start'][':start']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].set.start[':start'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumSetTraceTrace(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['set']['trace'][':trace']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].set.trace[':trace'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumSetValidateValidate(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['set']['validate'][':validate']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].set.validate[':validate'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumSetWriteWrite(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['set']['write'][':write']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].set.write[':write'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumStart(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['start']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].start.$put(args, options))
}

export async function putMimicAgentAgentNumStop(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['stop']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].stop.$put(args, options))
}

export async function putMimicAgentAgentNumStoreCopyOtherAgent(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['copy'][':otherAgent']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].store.copy[':otherAgent'].$put(args, options),
  )
}

export async function getMimicAgentAgentNumStoreExistsVar(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].store.exists[':var'].$get(args, options),
  )
}

export async function getMimicAgentAgentNumStoreGetVar(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].store.get[':var'].$get(args, options))
}

export async function getMimicAgentAgentNumStoreList(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].store.list.$get(args, options))
}

export async function putMimicAgentAgentNumStoreLreplaceVarIndex(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['lreplace'][':var'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].store.lreplace[':var'][':index'].$put(args, options),
  )
}

export async function getMimicAgentAgentNumStorePersistsVar(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].store.persists[':var'].$get(args, options),
  )
}

export async function putMimicAgentAgentNumStoreSetVarPersist(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['set'][':var'][':persist']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].store.set[':var'][':persist'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumStoreUnsetVar(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['unset'][':var']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].store.unset[':var'].$put(args, options),
  )
}

export async function postMimicAgentAgentNumTimerScriptAddScriptIntervalArg(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['timer']['script']['add'][':script'][':interval'][':arg']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].timer.script.add[':script'][':interval'][':arg'].$post(
      args,
      options,
    ),
  )
}

export async function deleteMimicAgentAgentNumTimerScriptDeleteScriptIntervalArg(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['timer']['script']['delete'][':script'][':interval'][':arg']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].timer.script.delete[':script'][':interval'][':arg'].$delete(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumTimerScriptList(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].timer.script.list.$get(args, options))
}

export async function postMimicAgentAgentNumTrapConfigAddIPPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['trap']['config']['add'][':IP'][':port']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].trap.config.add[':IP'][':port'].$post(args, options),
  )
}

export async function deleteMimicAgentAgentNumTrapConfigDeleteIPPort(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['trap']['config']['delete'][':IP'][':port']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].trap.config.delete[':IP'][':port'].$delete(args, options),
  )
}

export async function getMimicAgentAgentNumTrapConfigList(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].trap.config.list.$get(args, options))
}

export async function getMimicAgentAgentNumTrapList(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].trap.list.$get(args, options))
}

export async function postMimicAgentAgentNumValueAddObjectInstance(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['add'][':object'][':instance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].value.add[':object'][':instance'].$post(args, options),
  )
}

export async function getMimicAgentAgentNumValueEvalObjectInstance(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['eval'][':object'][':instance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].value.eval[':object'][':instance'].$get(args, options),
  )
}

export async function getMimicAgentAgentNumValueGetObjectInstanceVariable(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['get'][':object'][':instance'][':variable']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].value.get[':object'][':instance'][':variable'].$get(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumValueInfoObject(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].value.info[':object'].$get(args, options),
  )
}

export async function getMimicAgentAgentNumValueInstancesObject(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['instances'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].value.instances[':object'].$get(args, options),
  )
}

export async function getMimicAgentAgentNumValueListOID(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].value.list[':OID'].$get(args, options))
}

export async function getMimicAgentAgentNumValueMevalObjInsArray(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['meval'][':objInsArray']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].value.meval[':objInsArray'].$get(args, options),
  )
}

export async function getMimicAgentAgentNumValueMgetObjInsVarArray(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['mget'][':objInsVarArray']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].value.mget[':objInsVarArray'].$get(args, options),
  )
}

export async function getMimicAgentAgentNumValueMibObject(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].value.mib[':object'].$get(args, options),
  )
}

export async function putMimicAgentAgentNumValueMset(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['mset']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].value.mset.$put(args, options))
}

export async function putMimicAgentAgentNumValueMunset(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['munset']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].value.munset.$put(args, options))
}

export async function getMimicAgentAgentNumValueNameOID(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.agent[':agentNum'].value.name[':OID'].$get(args, options))
}

export async function getMimicAgentAgentNumValueOidObject(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].value.oid[':object'].$get(args, options),
  )
}

export async function deleteMimicAgentAgentNumValueRemoveObjectInstance(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['remove'][':object'][':instance']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].value.remove[':object'][':instance'].$delete(args, options),
  )
}

export async function putMimicAgentAgentNumValueSetObjectInstanceVariable(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['set'][':object'][':instance'][':variable']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].value.set[':object'][':instance'][':variable'].$put(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumValueSplitOID(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].value.split[':OID'].$get(args, options),
  )
}

export async function getMimicAgentAgentNumValueStateGetObject(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['state']['get'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].value.state.get[':object'].$get(args, options),
  )
}

export async function putMimicAgentAgentNumValueStateSetObjectState(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['state']['set'][':object'][':state']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].value.state.set[':object'][':state'].$put(args, options),
  )
}

export async function putMimicAgentAgentNumValueUnsetObjectInstanceVariable(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['unset'][':object'][':instance'][':variable']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].value.unset[':object'][':instance'][':variable'].$put(
      args,
      options,
    ),
  )
}

export async function getMimicAgentAgentNumValueVariablesObjectInstance(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['variables'][':object'][':instance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.agent[':agentNum'].value.variables[':object'][':instance'].$get(args, options),
  )
}

export async function putMimicClearFirstAgentNumLastAgentNum(
  args: InferRequestType<(typeof client.mimic.clear)[':firstAgentNum'][':lastAgentNum']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.clear[':firstAgentNum'][':lastAgentNum'].$put(args, options),
  )
}

export async function getMimicGetActiveDataList(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.active_data_list.$get(undefined, options))
}

export async function getMimicGetActiveList(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.active_list.$get(undefined, options))
}

export async function getMimicGetCfgfile(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.cfgfile.$get(undefined, options))
}

export async function getMimicGetCfgfileChanged(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.cfgfile_changed.$get(undefined, options))
}

export async function getMimicGetChangedConfigList(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.changed_config_list.$get(undefined, options))
}

export async function getMimicGetChangedStateList(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.changed_state_list.$get(undefined, options))
}

export async function getMimicGetClients(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.clients.$get(undefined, options))
}

export async function getMimicGetConfiguredList(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.configured_list.$get(undefined, options))
}

export async function getMimicGetInterfaces(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.interfaces.$get(undefined, options))
}

export async function getMimicGetLast(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.last.$get(undefined, options))
}

export async function getMimicGetLog(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.log.$get(undefined, options))
}

export async function getMimicGetMax(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.max.$get(undefined, options))
}

export async function getMimicGetNetaddr(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.netaddr.$get(undefined, options))
}

export async function getMimicGetNetdev(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.netdev.$get(undefined, options))
}

export async function getMimicGetProduct(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.product.$get(undefined, options))
}

export async function getMimicGetProtocols(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.protocols.$get(undefined, options))
}

export async function getMimicGetReturn(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.return.$get(undefined, options))
}

export async function getMimicGetVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.get.version.$get(undefined, options))
}

export async function putMimicLoadCfgFileFirstAgentNumLastAgentNumStartAgentNum(
  args: InferRequestType<
    (typeof client.mimic.load)[':cfgFile'][':firstAgentNum'][':lastAgentNum'][':startAgentNum']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.load[':cfgFile'][':firstAgentNum'][':lastAgentNum'][':startAgentNum'].$put(
      args,
      options,
    ),
  )
}

export async function getMimicMgetInfoArray(
  args: InferRequestType<(typeof client.mimic.mget)[':infoArray']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.mget[':infoArray'].$get(args, options))
}

export async function getMimicProtocolMsgCoapGetStatsHdr(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.protocol.msg.coap.get.stats_hdr.$get(undefined, options))
}

export async function getMimicProtocolMsgDhcpGetStatsHdr(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.protocol.msg.dhcp.get.stats_hdr.$get(undefined, options))
}

export async function getMimicProtocolMsgIpmiGetStatsHdr(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.protocol.msg.ipmi.get.stats_hdr.$get(undefined, options))
}

export async function getMimicProtocolMsgMqttGetStatsHdr(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.protocol.msg.mqtt.get.stats_hdr.$get(undefined, options))
}

export async function getMimicProtocolMsgNetflowGetStatsHdr(options?: ClientRequestOptions) {
  return await parseResponse(
    client.mimic.protocol.msg.netflow.get.stats_hdr.$get(undefined, options),
  )
}

export async function getMimicProtocolMsgProxyGetStatsHdr(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.protocol.msg.proxy.get.stats_hdr.$get(undefined, options))
}

export async function getMimicProtocolMsgSflowGetStatsHdr(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.protocol.msg.sflow.get.stats_hdr.$get(undefined, options))
}

export async function getMimicProtocolMsgSnmptcpGetStatsHdr(options?: ClientRequestOptions) {
  return await parseResponse(
    client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get(undefined, options),
  )
}

export async function getMimicProtocolMsgSshGetStatsHdr(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.protocol.msg.ssh.get.stats_hdr.$get(undefined, options))
}

export async function getMimicProtocolMsgSyslogGetStatsHdr(options?: ClientRequestOptions) {
  return await parseResponse(
    client.mimic.protocol.msg.syslog.get.stats_hdr.$get(undefined, options),
  )
}

export async function getMimicProtocolMsgTelnetGetStatsHdr(options?: ClientRequestOptions) {
  return await parseResponse(
    client.mimic.protocol.msg.telnet.get.stats_hdr.$get(undefined, options),
  )
}

export async function getMimicProtocolMsgTftpGetStatsHdr(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.protocol.msg.tftp.get.stats_hdr.$get(undefined, options))
}

export async function getMimicProtocolMsgTodGetStatsHdr(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.protocol.msg.tod.get.stats_hdr.$get(undefined, options))
}

export async function getMimicProtocolMsgWebGetStatsHdr(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.protocol.msg.web.get.stats_hdr.$get(undefined, options))
}

export async function putMimicSave(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.save.$put(undefined, options))
}

export async function putMimicSaveasCfgFileFirstAgentNumLastAgentNum(
  args: InferRequestType<
    (typeof client.mimic.saveas)[':cfgFile'][':firstAgentNum'][':lastAgentNum']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.saveas[':cfgFile'][':firstAgentNum'][':lastAgentNum'].$put(args, options),
  )
}

export async function putMimicSetLog(
  args: InferRequestType<typeof client.mimic.set.log.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.set.log.$put(args, options))
}

export async function putMimicSetNetdev(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.set.netdev.$put(undefined, options))
}

export async function putMimicSetPersistent(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.set.persistent.$put(undefined, options))
}

export async function putMimicStart(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.start.$put(undefined, options))
}

export async function putMimicStop(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.stop.$put(undefined, options))
}

export async function getMimicStoreExistsVar(
  args: InferRequestType<(typeof client.mimic.store.exists)[':var']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.store.exists[':var'].$get(args, options))
}

export async function getMimicStoreGetVar(
  args: InferRequestType<(typeof client.mimic.store.get)[':var']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.store.get[':var'].$get(args, options))
}

export async function getMimicStoreList(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.store.list.$get(undefined, options))
}

export async function putMimicStoreLreplaceVarIndex(
  args: InferRequestType<(typeof client.mimic.store.lreplace)[':var'][':index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.store.lreplace[':var'][':index'].$put(args, options))
}

export async function getMimicStorePersistsVar(
  args: InferRequestType<(typeof client.mimic.store.persists)[':var']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.store.persists[':var'].$get(args, options))
}

export async function putMimicStoreSetVarPersist(
  args: InferRequestType<(typeof client.mimic.store.set)[':var'][':persist']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.store.set[':var'][':persist'].$put(args, options))
}

export async function putMimicStoreUnsetVar(
  args: InferRequestType<(typeof client.mimic.store.unset)[':var']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mimic.store.unset[':var'].$put(args, options))
}

export async function putMimicTerminate(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.terminate.$put(undefined, options))
}

export async function postMimicTimerScriptAddScriptIntervalArg(
  args: InferRequestType<
    (typeof client.mimic.timer.script.add)[':script'][':interval'][':arg']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.timer.script.add[':script'][':interval'][':arg'].$post(args, options),
  )
}

export async function deleteMimicTimerScriptDeleteScriptIntervalArg(
  args: InferRequestType<
    (typeof client.mimic.timer.script.delete)[':script'][':interval'][':arg']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mimic.timer.script.delete[':script'][':interval'][':arg'].$delete(args, options),
  )
}

export async function getMimicTimerScriptList(options?: ClientRequestOptions) {
  return await parseResponse(client.mimic.timer.script.list.$get(undefined, options))
}
