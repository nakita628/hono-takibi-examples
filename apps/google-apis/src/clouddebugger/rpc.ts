import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2ControllerDebuggeesRegister(
  args: InferRequestType<typeof client.v2.controller.debuggees.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.controller.debuggees.register.$post(args, options))
}

export async function getV2ControllerDebuggeesDebuggeeIdBreakpoints(
  args: InferRequestType<
    (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.controller.debuggees[':debuggeeId'].breakpoints.$get(args, options),
  )
}

export async function putV2ControllerDebuggeesDebuggeeIdBreakpointsId(
  args: InferRequestType<
    (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.controller.debuggees[':debuggeeId'].breakpoints[':id'].$put(args, options),
  )
}

export async function getV2DebuggerDebuggees(
  args: InferRequestType<typeof client.v2.debugger.debuggees.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.debugger.debuggees.$get(args, options))
}

export async function getV2DebuggerDebuggeesDebuggeeIdBreakpoints(
  args: InferRequestType<
    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.debugger.debuggees[':debuggeeId'].breakpoints.$get(args, options),
  )
}

export async function postV2DebuggerDebuggeesDebuggeeIdBreakpointsSet(
  args: InferRequestType<
    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['set']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.debugger.debuggees[':debuggeeId'].breakpoints.set.$post(args, options),
  )
}

export async function getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointId(
  args: InferRequestType<
    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.debugger.debuggees[':debuggeeId'].breakpoints[':breakpointId'].$get(args, options),
  )
}

export async function deleteV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointId(
  args: InferRequestType<
    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.debugger.debuggees[':debuggeeId'].breakpoints[':breakpointId'].$delete(args, options),
  )
}
