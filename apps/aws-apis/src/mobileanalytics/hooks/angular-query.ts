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

export function get_2014_06_05Key() {
  return ['2014-06-05'] as const
}

export function getPost20140605EventsXAmzClientContextMutationKey() {
  return ['2014-06-05', '/2014-06-05/events#x-amz-Client-Context', 'POST'] as const
}

export function getPost20140605EventsXAmzClientContextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2014-06-05']['events#x-amz-Client-Context']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2014-06-05']['events#x-amz-Client-Context']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20140605EventsXAmzClientContextMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2014-06-05']['events#x-amz-Client-Context']['$post']>,
    ) {
      return parseResponse(client['2014-06-05']['events#x-amz-Client-Context'].$post(args, options))
    },
  })
}

export function injectPost20140605EventsXAmzClientContext<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2014-06-05']['events#x-amz-Client-Context']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2014-06-05']['events#x-amz-Client-Context']['$post']>,
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
    const mutationDefaults = getPost20140605EventsXAmzClientContextMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
