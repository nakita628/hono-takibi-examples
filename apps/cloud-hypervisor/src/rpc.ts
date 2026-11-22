import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getVmmPing(options?: ClientRequestOptions) {
  return await parseResponse(client['vmm.ping'].$get(undefined, options))
}

export async function putVmmShutdown(options?: ClientRequestOptions) {
  return await parseResponse(client['vmm.shutdown'].$put(undefined, options))
}

export async function getVmInfo(options?: ClientRequestOptions) {
  return await parseResponse(client['vm.info'].$get(undefined, options))
}

export async function getVmCounters(options?: ClientRequestOptions) {
  return await parseResponse(client['vm.counters'].$get(undefined, options))
}

export async function getVmBalloonStats(options?: ClientRequestOptions) {
  return await parseResponse(client['vm.balloon-stats'].$get(undefined, options))
}

export async function putVmCreate(
  args: InferRequestType<(typeof client)['vm.create']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.create'].$put(args, options))
}

export async function putVmDelete(options?: ClientRequestOptions) {
  return await parseResponse(client['vm.delete'].$put(undefined, options))
}

export async function putVmBoot(options?: ClientRequestOptions) {
  return await parseResponse(client['vm.boot'].$put(undefined, options))
}

export async function putVmPause(options?: ClientRequestOptions) {
  return await parseResponse(client['vm.pause'].$put(undefined, options))
}

export async function putVmResume(options?: ClientRequestOptions) {
  return await parseResponse(client['vm.resume'].$put(undefined, options))
}

export async function putVmShutdown(options?: ClientRequestOptions) {
  return await parseResponse(client['vm.shutdown'].$put(undefined, options))
}

export async function putVmReboot(options?: ClientRequestOptions) {
  return await parseResponse(client['vm.reboot'].$put(undefined, options))
}

export async function putVmPowerButton(options?: ClientRequestOptions) {
  return await parseResponse(client['vm.power-button'].$put(undefined, options))
}

export async function putVmResize(
  args: InferRequestType<(typeof client)['vm.resize']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.resize'].$put(args, options))
}

export async function putVmResizeDisk(
  args: InferRequestType<(typeof client)['vm.resize-disk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.resize-disk'].$put(args, options))
}

export async function putVmResizeZone(
  args: InferRequestType<(typeof client)['vm.resize-zone']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.resize-zone'].$put(args, options))
}

export async function putVmAddDevice(
  args: InferRequestType<(typeof client)['vm.add-device']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.add-device'].$put(args, options))
}

export async function putVmRemoveDevice(
  args: InferRequestType<(typeof client)['vm.remove-device']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.remove-device'].$put(args, options))
}

export async function putVmAddDisk(
  args: InferRequestType<(typeof client)['vm.add-disk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.add-disk'].$put(args, options))
}

export async function putVmAddFs(
  args: InferRequestType<(typeof client)['vm.add-fs']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.add-fs'].$put(args, options))
}

export async function putVmAddGenericVhostUser(
  args: InferRequestType<(typeof client)['vm.add-generic-vhost-user']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.add-generic-vhost-user'].$put(args, options))
}

export async function putVmAddPmem(
  args: InferRequestType<(typeof client)['vm.add-pmem']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.add-pmem'].$put(args, options))
}

export async function putVmAddNet(
  args: InferRequestType<(typeof client)['vm.add-net']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.add-net'].$put(args, options))
}

export async function putVmAddVsock(
  args: InferRequestType<(typeof client)['vm.add-vsock']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.add-vsock'].$put(args, options))
}

export async function putVmAddVdpa(
  args: InferRequestType<(typeof client)['vm.add-vdpa']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.add-vdpa'].$put(args, options))
}

export async function putVmAddUserDevice(
  args: InferRequestType<(typeof client)['vm.add-user-device']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.add-user-device'].$put(args, options))
}

export async function putVmSnapshot(
  args: InferRequestType<(typeof client)['vm.snapshot']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.snapshot'].$put(args, options))
}

export async function putVmCoredump(
  args: InferRequestType<(typeof client)['vm.coredump']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.coredump'].$put(args, options))
}

export async function putVmNmi(options?: ClientRequestOptions) {
  return await parseResponse(client['vm.nmi'].$put(undefined, options))
}

export async function putVmRestore(
  args: InferRequestType<(typeof client)['vm.restore']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.restore'].$put(args, options))
}

export async function putVmReceiveMigration(
  args: InferRequestType<(typeof client)['vm.receive-migration']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.receive-migration'].$put(args, options))
}

export async function putVmSendMigration(
  args: InferRequestType<(typeof client)['vm.send-migration']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vm.send-migration'].$put(args, options))
}

export async function putVmCancelMigration(options?: ClientRequestOptions) {
  return await parseResponse(client['vm.cancel-migration'].$put(undefined, options))
}
