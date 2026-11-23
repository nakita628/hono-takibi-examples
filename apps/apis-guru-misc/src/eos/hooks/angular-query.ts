import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNetKey() {
  return ['net'] as const
}

export function getPostNetConnectMutationKey() {
  return ['net', '/net/connect', 'POST'] as const
}

export function getPostNetConnectMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.net.connect.$post>>>>>,
    TError,
    InferRequestType<typeof client.net.connect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetConnectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.net.connect.$post>) {
      return parseResponse(client.net.connect.$post(args, options))
    },
  })
}

export function injectPostNetConnect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.net.connect.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.net.connect.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNetConnectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostNetConnectionsMutationKey() {
  return ['net', '/net/connections', 'POST'] as const
}

export function getPostNetConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.net.connections.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.net.connections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.net.connections.$post>) {
      return parseResponse(client.net.connections.$post(args, options))
    },
  })
}

export function injectPostNetConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.net.connections.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.net.connections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNetConnectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostNetDisconnectMutationKey() {
  return ['net', '/net/disconnect', 'POST'] as const
}

export function getPostNetDisconnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.net.disconnect.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.net.disconnect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetDisconnectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.net.disconnect.$post>) {
      return parseResponse(client.net.disconnect.$post(args, options))
    },
  })
}

export function injectPostNetDisconnect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.net.disconnect.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.net.disconnect.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNetDisconnectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostNetStatusMutationKey() {
  return ['net', '/net/status', 'POST'] as const
}

export function getPostNetStatusMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.net.status.$post>>>>>,
    TError,
    InferRequestType<typeof client.net.status.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.net.status.$post>) {
      return parseResponse(client.net.status.$post(args, options))
    },
  })
}

export function injectPostNetStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.net.status.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.net.status.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNetStatusMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
