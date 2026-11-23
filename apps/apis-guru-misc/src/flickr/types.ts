type ContextPhoto = {
  farm?: string | undefined
  id?: string | undefined
  is_faved?: boolean | undefined
  license?: number | undefined
  media?: string | undefined
  owner?: string | undefined
  safe?: boolean | undefined
  secret?: string | undefined
  server?: string | undefined
  thumb?: string | undefined
  title?: string | undefined
  url?: string | undefined
}
type Stat = string
type Note = { description?: string | undefined }
type Owner = {
  iconfarm?: string | undefined
  iconserver?: string | undefined
  is_ad_free?: boolean | undefined
  ispro?: boolean | undefined
  location?: string | undefined
  noindexfollow?: boolean | undefined
  nsid?: string | undefined
  path_alias?: string | undefined
  realname?: string | undefined
  username?: string | undefined
}
type Tag = {
  _content?: string | undefined
  author?: string | undefined
  authorname?: string | undefined
  id?: string | undefined
  machine_tag?: boolean | undefined
  raw?: string | undefined
}
type URL = { _content?: string | undefined; type?: string | undefined }
type Photo = {
  comments?: { _content?: string | undefined } | undefined
  dates?:
    | {
        lastupdate?: string | undefined
        posted?: string | undefined
        taken?: string | undefined
        takengranularity?: string | undefined
        takenunknown?: boolean | undefined
      }
    | undefined
  dateuploaded?: string | undefined
  description?: { _content?: string | undefined } | undefined
  editability?: { canaddmeta?: boolean | undefined; cancomment?: boolean | undefined } | undefined
  farm?: string | undefined
  id?: string | undefined
  isfavorite?: boolean | undefined
  license?: string | undefined
  media?: string | undefined
  notes?: { note?: Note[] | undefined } | undefined
  originalsecret?: string | undefined
  owner?: Owner | undefined
  people?: { haspeople?: boolean | undefined } | undefined
  permissions?: { permaddmeta?: string | undefined; permcomment?: string | undefined } | undefined
  publiceditability?:
    | { canaddmeta?: boolean | undefined; cancomment?: boolean | undefined }
    | undefined
  rotation?: string | undefined
  safe?: boolean | undefined
  safety_level?: string | undefined
  secret?: string | undefined
  server?: string | undefined
  tags?: { tag?: Tag[] | undefined } | undefined
  title?: { _content?: string | undefined } | undefined
  urls?: { url?: URL[] | undefined } | undefined
  usage?:
    | {
        canblog?: boolean | undefined
        candownload?: boolean | undefined
        canprint?: boolean | undefined
        canshare?: boolean | undefined
      }
    | undefined
  views?: string | undefined
  visibility?:
    | {
        isfamily?: boolean | undefined
        isfriend?: boolean | undefined
        ispublic?: boolean | undefined
      }
    | undefined
}
type TopicReply = {
  author?: string | undefined
  author_is_deleted?: boolean | undefined
  author_path_alias?: string | undefined
  authorname?: string | undefined
  can_delete?: boolean | undefined
  can_edit?: boolean | undefined
  datecreate?: string | undefined
  iconfarm?: string | undefined
  iconserver?: string | undefined
  id?: string | undefined
  is_pro?: boolean | undefined
  lastedit?: string | undefined
  message?: { _content?: string | undefined } | undefined
}
type Topic = {
  author?: string | undefined
  author_is_deleted?: boolean | undefined
  author_path_alias?: string | undefined
  authorname?: string | undefined
  can_delete?: boolean | undefined
  can_edit?: boolean | undefined
  can_reply?: boolean | undefined
  count_replies?: number | undefined
  datecreate?: string | undefined
  datelastpost?: string | undefined
  iconfarm?: string | undefined
  iconserver?: string | undefined
  id?: string | undefined
  is_locked?: boolean | undefined
  is_pro?: boolean | undefined
  is_sticky?: boolean | undefined
  last_reply?: string | undefined
  lastedit?: string | undefined
  message?: { _content?: string | undefined } | undefined
  role?: string | undefined
  subject?: string | undefined
}
type Cover = {
  farm?: string | undefined
  id?: string | undefined
  isfamily?: boolean | undefined
  isfriend?: boolean | undefined
  ispublic?: boolean | undefined
  owner?: string | undefined
  secret?: string | undefined
  server?: string | undefined
  title?: string | undefined
  y?: string | undefined
}
type PhotoURLs = {
  h?: string | undefined
  l?: string | undefined
  s?: string | undefined
  t?: string | undefined
}
type Group = {
  blast?:
    | {
        _content?: string | undefined
        date_blast_added?: string | undefined
        user_id?: string | undefined
      }
    | undefined
  cover?: Cover | undefined
  coverphoto_farm?: string | undefined
  coverphoto_server?: string | undefined
  coverphoto_url?: PhotoURLs | undefined
  description?: { _content?: string | undefined } | undefined
  iconfarm?: string | undefined
  iconserver?: string | undefined
  id?: string | undefined
  is_admin?: boolean | undefined
  is_member?: boolean | undefined
  is_moderator?: boolean | undefined
  ispoolmoderated?: boolean | undefined
  lang?: string | undefined
  members?: { _content?: string | undefined } | undefined
  name?: { _content?: string | undefined } | undefined
  path_alias?: string | undefined
  pool_count?: { _content?: string | undefined } | undefined
  pool_rows?: number | undefined
  privacy?: { _content?: string | undefined } | undefined
  restrictions?:
    | {
        art_ok?: boolean | undefined
        has_geo?: boolean | undefined
        images_ok?: boolean | undefined
        moderate_ok?: boolean | undefined
        photos_ok?: boolean | undefined
        restricted_ok?: boolean | undefined
        safe_ok?: boolean | undefined
        screens_ok?: boolean | undefined
        videos_ok?: boolean | undefined
      }
    | undefined
  roles?:
    | { admin?: string | undefined; member?: string | undefined; moderator?: string | undefined }
    | undefined
  rules?: { _content?: string | undefined } | undefined
  throttle?:
    | { count?: number | undefined; mode?: string | undefined; remaining?: string | undefined }
    | undefined
  topic_count?: { _content?: string | undefined } | undefined
}
type Person = {
  can_buy_pro?: boolean | undefined
  cover?: Cover | undefined
  coverphoto?: PhotoURLs | undefined
  coverphoto_farm?: string | undefined
  coverphoto_server?: string | undefined
  description?: { _content?: string | undefined } | undefined
  disable_keyboard_shortcuts?: { _content?: string | undefined } | undefined
  expire?: boolean | undefined
  has_stats?: boolean | undefined
  iconfarm?: string | undefined
  iconserver?: string | undefined
  id?: string | undefined
  is_ad_free?: boolean | undefined
  ispro?: boolean | undefined
  location?: { _content?: string | undefined } | undefined
  mbox_sha1sum?: { _content?: string | undefined } | undefined
  mobileurl?: { _content?: string | undefined } | undefined
  nsid?: string | undefined
  path_alias?: string | undefined
  photos?:
    | {
        count?: { _content?: string | undefined } | undefined
        firstdate?: { _content?: string | undefined } | undefined
        firstdatetaken?: { _content?: string | undefined } | undefined
        views?: { _content?: string | undefined } | undefined
      }
    | undefined
  photosurl?: { _content?: string | undefined } | undefined
  profileurl?: { _content?: string | undefined } | undefined
  realname?: { _content?: string | undefined } | undefined
  timezone?:
    | { label?: string | undefined; offset?: string | undefined; timezone_id?: string | undefined }
    | undefined
  unread_messages?: { _content?: string | undefined } | undefined
  user_secret?: string | undefined
  username?: { _content?: string | undefined } | undefined
  yintl?: string | undefined
}
type Size = {
  height?: number | undefined
  label?: string | undefined
  media?: string | undefined
  source?: string | undefined
  url?: string | undefined
  width?: number | undefined
}
type Album = {
  can_comment?: boolean | undefined
  count_comments?: number | undefined
  count_views?: number | undefined
  date_create?: number | undefined
  date_update?: number | undefined
  description?: string | undefined
  farm?: string | undefined
  id?: string | undefined
  photos?: number | undefined
  primary?: string | undefined
  secret?: string | undefined
  server?: string | undefined
  title?: string | undefined
  videos?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/oauth/access_token': {
      $get: {
        input: {
          query: {
            oauth_consumer_key: string
            oauth_nonce: string
            oauth_timestamp: string
            oauth_signature_method: string
            oauth_version: string
            oauth_signature: string
            oauth_verifier: string
            oauth_token: string
          }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth/request_token': {
      $get: {
        input: {
          query: {
            oauth_consumer_key: string
            oauth_nonce: string
            oauth_timestamp: string
            oauth_signature_method: string
            oauth_version: string
            oauth_signature: string
            oauth_callback: string
          }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.favorites.getContext': {
      $get: {
        input: { query: { api_key: string; photo_id: string; user_id?: string | undefined } }
        output: {
          count?: { _content?: string | undefined } | undefined
          nextphoto?: ContextPhoto | undefined
          prevphoto?: ContextPhoto | undefined
          stat?: Stat | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.favorites.getList': {
      $get: {
        input: {
          query: {
            api_key: string
            user_id: string
            min_fave_date?: number | undefined
            max_fave_date?: number | undefined
            page?: number | undefined
            per_page?: number | undefined
          }
        }
        output: {
          page?: number | undefined
          pages?: number | undefined
          perpage?: number | undefined
          photos?: Photo[] | undefined
          total?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.galleries.getPhotos': {
      $get: {
        input: { query: { api_key: string; gallery_id: string } }
        output: { photos?: Photo[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.groups.discuss.replies.getInfo': {
      $get: {
        input: {
          query: {
            api_key: string
            group_id?: string | undefined
            topic_id: string
            reply_id: string
          }
        }
        output: { reply?: TopicReply | undefined; stat?: Stat | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.groups.discuss.topics.getInfo': {
      $get: {
        input: { query: { api_key: string; group_id?: string | undefined; topic_id: string } }
        output: { stat?: Stat | undefined; topic?: Topic | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.groups.discuss.topics.getList': {
      $get: {
        input: {
          query: {
            api_key: string
            group_id?: string | undefined
            page?: number | undefined
            per_page?: number | undefined
          }
        }
        output: {
          iconfarm?: number | undefined
          iconserver?: number | undefined
          ispoolmoderated?: boolean | undefined
          lang?: string | undefined
          members?: number | undefined
          name?: string | undefined
          page?: number | undefined
          pages?: number | undefined
          per_page?: number | undefined
          privacy?: number | undefined
          topics?: Topic[] | undefined
          total?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.groups.getInfo': {
      $get: {
        input: {
          query: {
            api_key: string
            group_id?: string | undefined
            group_path_alias?: string | undefined
            lang?: string | undefined
          }
        }
        output: { group?: Group | undefined; stat?: Stat | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.groups.pools.getContext': {
      $get: {
        input: { query: { api_key: string; photo_id: string; group_id?: string | undefined } }
        output: {
          count?: { _content?: string | undefined } | undefined
          nextphoto?: ContextPhoto | undefined
          prevphoto?: ContextPhoto | undefined
          stat?: Stat | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.groups.pools.getPhotos': {
      $get: {
        input: { query: { api_key: string; group_id?: string | undefined } }
        output: { photos?: Photo[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.people.getInfo': {
      $get: {
        input: { query: { api_key: string; user_id?: string | undefined } }
        output: { person?: Person | undefined; stat?: Stat | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.people.getPhotos': {
      $get: {
        input: {
          query: {
            api_key: string
            user_id: string
            safe_search?: number | undefined
            min_upload_date?: number | undefined
            max_upload_date?: number | undefined
            min_taken_date?: number | undefined
            max_taken_date?: number | undefined
            content_type?: number | undefined
            privacy_filter?: number | undefined
            page?: number | undefined
            per_page?: number | undefined
          }
        }
        output: {
          page?: number | undefined
          pages?: number | undefined
          perpage?: number | undefined
          photos?: Photo[] | undefined
          total?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.photolist.getContext': {
      $get: {
        input: { query: { api_key: string; photo_id: string; photolist_id: string } }
        output: {
          count?: { _content?: string | undefined } | undefined
          nextphoto?: ContextPhoto | undefined
          prevphoto?: ContextPhoto | undefined
          stat?: Stat | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.photos.getContext': {
      $get: {
        input: { query: { api_key: string; photo_id: string } }
        output: {
          count?: { _content?: string | undefined } | undefined
          nextphoto?: ContextPhoto | undefined
          prevphoto?: ContextPhoto | undefined
          stat?: Stat | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.photos.getExif': {
      $get: {
        input: { query: { api_key: string; photo_id: string; secret?: string | undefined } }
        output: {
          photo?:
            | {
                camera?: string | undefined
                exif?:
                  | {
                      label?: string | undefined
                      raw?: { _content?: string | undefined } | undefined
                      tag?: string | undefined
                      tagspace?: string | undefined
                      tagspaceid?: string | undefined
                    }[]
                  | undefined
                farm?: string | undefined
                id?: string | undefined
                secret?: string | undefined
                server?: string | undefined
              }
            | undefined
          stat?: Stat | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.photos.getInfo': {
      $get: {
        input: { query: { api_key: string; photo_id: string } }
        output: { photo?: Photo | undefined; stat?: Stat | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.photos.getSizes': {
      $get: {
        input: { query: { api_key: string; photo_id: string } }
        output: {
          sizes?:
            | {
                canblog?: number | undefined
                candownload?: number | undefined
                canprint?: number | undefined
                sizes?: Size[] | undefined
              }
            | undefined
          stat?: Stat | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.photos.licenses.getInfo': {
      $get: {
        input: { query: { api_key: string } }
        output: {
          licenses?:
            | {
                license?:
                  | {
                      id?: number | undefined
                      name?: string | undefined
                      url?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          stat?: Stat | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.photos.search': {
      $get: {
        input: {
          query: {
            api_key: string
            text?: string | undefined
            tags?: string | undefined
            user_id?: string | undefined
            min_upload_date?: string | undefined
            max_upload_date?: string | undefined
            min_taken_date?: string | undefined
            max_taken_date?: string | undefined
            license?: string | undefined
            sort?: string | undefined
            privacy_filter?: number | undefined
            bbox?: string | undefined
            accuracy?: string | undefined
            safe_search?: number | undefined
            content_type?: number | undefined
            machine_tags?: string | undefined
            machine_tag_mode?: string | undefined
            group_id?: string | undefined
            contacts?: string | undefined
            woe_id?: string | undefined
            place_id?: string | undefined
            media?: string | undefined
            has_geo?: string | undefined
            geo_context?: string | undefined
            lat?: string | undefined
            lon?: string | undefined
            radius?: number | undefined
            radius_units?: string | undefined
            is_commons?: boolean | undefined
            in_gallery?: boolean | undefined
            is_getty?: boolean | undefined
            per_page?: number | undefined
            page?: number | undefined
          }
        }
        output: {
          page?: number | undefined
          pages?: number | undefined
          perpage?: number | undefined
          photos?: Photo[] | undefined
          total?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.photosets.getContext': {
      $get: {
        input: { query: { api_key: string; photo_id: string; photoset_id?: string | undefined } }
        output: {
          count?: { _content?: string | undefined } | undefined
          nextphoto?: ContextPhoto | undefined
          prevphoto?: ContextPhoto | undefined
          stat?: Stat | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.photosets.getList': {
      $get: {
        input: {
          query: {
            api_key: string
            user_id: string
            page?: number | undefined
            per_page?: number | undefined
          }
        }
        output: {
          page?: number | undefined
          pages?: number | undefined
          perpage?: number | undefined
          photosets?: Album[] | undefined
          total?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.photosets.getPhotos': {
      $get: {
        input: { query: { api_key: string; photoset_id: string } }
        output: { photoset?: Photo[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest?method=flickr.test.echo': {
      $get: {
        input: { query: { api_key: string; echo?: string | undefined } }
        output: { echo?: { _content?: string | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/upload': {
      $post: {
        input: {
          form: {
            api_key: string
            content_type?: '1' | '2' | '3' | undefined
            description?: string | undefined
            hidden?: '1' | '2' | undefined
            is_family?: '0' | '1' | undefined
            is_friend?: '0' | '1' | undefined
            is_public?: '0' | '1' | undefined
            photo: File
            safety_level?: '1' | '2' | '3' | undefined
            tags?: string | undefined
            title?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
