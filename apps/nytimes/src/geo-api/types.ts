type Event = {
  city?: string | undefined
  critic_name?: string | undefined
  event_detail_url?: string | undefined
  event_id?: number | undefined
  event_name?: string | undefined
  event_schedule_id?: number | undefined
  festival?: boolean | undefined
  film_rating?: boolean | undefined
  free?: boolean | undefined
  kid_friendly?: boolean | undefined
  last_chance?: boolean | undefined
  last_modified?: string | undefined
  long_running_show?: boolean | undefined
  previews_and_openings?: boolean | undefined
  recur_days?: string[] | undefined
  recurring_start_date?: string | undefined
  state?: string | undefined
  times_pick?: boolean | undefined
  web_description?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/query.json': {
      $get: {
        input: {
          query: {
            name?: string | undefined
            latitude?: string | undefined
            longitude?: string | undefined
            elevation?: number | undefined
            sw?: string | undefined
            query?: string | undefined
            filter?: string | undefined
            date_range?: string | undefined
            facets?: 0 | 1 | undefined
            sort?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: { results?: Event[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
