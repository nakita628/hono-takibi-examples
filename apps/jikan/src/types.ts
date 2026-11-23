type AnimeImages = {
  jpg?:
    | {
        image_url?: (string | null) | undefined
        small_image_url?: (string | null) | undefined
        large_image_url?: (string | null) | undefined
      }
    | undefined
  webp?:
    | {
        image_url?: (string | null) | undefined
        small_image_url?: (string | null) | undefined
        large_image_url?: (string | null) | undefined
      }
    | undefined
}
type TrailerBase = {
  youtube_id?: (string | null) | undefined
  url?: (string | null) | undefined
  embed_url?: (string | null) | undefined
}
type Title = { type?: string | undefined; title?: string | undefined }
type Daterange = {
  from?: (string | null) | undefined
  to?: (string | null) | undefined
  prop?:
    | {
        from?:
          | {
              day?: (number | null) | undefined
              month?: (number | null) | undefined
              year?: (number | null) | undefined
            }
          | undefined
        to?:
          | {
              day?: (number | null) | undefined
              month?: (number | null) | undefined
              year?: (number | null) | undefined
            }
          | undefined
        string?: (string | null) | undefined
      }
    | undefined
}
type Broadcast = {
  day?: (string | null) | undefined
  time?: (string | null) | undefined
  timezone?: (string | null) | undefined
  string?: (string | null) | undefined
}
type MalUrl = {
  mal_id?: number | undefined
  type?: string | undefined
  name?: string | undefined
  url?: string | undefined
}
type AnimeFull = {
  mal_id?: number | undefined
  url?: string | undefined
  images?: AnimeImages | undefined
  trailer?: TrailerBase | undefined
  approved?: boolean | undefined
  titles?: Title[] | undefined
  title?: string | undefined
  title_english?: (string | null) | undefined
  title_japanese?: (string | null) | undefined
  title_synonyms?: string[] | undefined
  type?: {} | undefined
  source?: (string | null) | undefined
  episodes?: (number | null) | undefined
  status?: 'Finished Airing' | 'Currently Airing' | 'Not yet aired' | undefined
  airing?: boolean | undefined
  aired?: Daterange | undefined
  duration?: (string | null) | undefined
  rating?:
    | 'G - All Ages'
    | 'PG - Children'
    | 'PG-13 - Teens 13 or older'
    | 'R - 17+ (violence & profanity)'
    | 'R+ - Mild Nudity'
    | 'Rx - Hentai'
    | undefined
  score?: (number | null) | undefined
  scored_by?: (number | null) | undefined
  rank?: (number | null) | undefined
  popularity?: (number | null) | undefined
  members?: (number | null) | undefined
  favorites?: (number | null) | undefined
  synopsis?: (string | null) | undefined
  background?: (string | null) | undefined
  season?: 'summer' | 'winter' | 'spring' | 'fall' | undefined
  year?: (number | null) | undefined
  broadcast?: Broadcast | undefined
  producers?: MalUrl[] | undefined
  licensors?: MalUrl[] | undefined
  studios?: MalUrl[] | undefined
  genres?: MalUrl[] | undefined
  explicit_genres?: MalUrl[] | undefined
  themes?: MalUrl[] | undefined
  demographics?: MalUrl[] | undefined
  relations?: { relation?: string | undefined; entry?: MalUrl[] | undefined }[] | undefined
  theme?: { openings?: string[] | undefined; endings?: string[] | undefined } | undefined
  external?: { name?: string | undefined; url?: string | undefined }[] | undefined
  streaming?: { name?: string | undefined; url?: string | undefined }[] | undefined
}
type Anime = {
  mal_id?: number | undefined
  url?: string | undefined
  images?: AnimeImages | undefined
  trailer?: TrailerBase | undefined
  approved?: boolean | undefined
  titles?: Title[] | undefined
  title?: string | undefined
  title_english?: (string | null) | undefined
  title_japanese?: (string | null) | undefined
  title_synonyms?: string[] | undefined
  type?: {} | undefined
  source?: (string | null) | undefined
  episodes?: (number | null) | undefined
  status?: 'Finished Airing' | 'Currently Airing' | 'Not yet aired' | undefined
  airing?: boolean | undefined
  aired?: Daterange | undefined
  duration?: (string | null) | undefined
  rating?:
    | 'G - All Ages'
    | 'PG - Children'
    | 'PG-13 - Teens 13 or older'
    | 'R - 17+ (violence & profanity)'
    | 'R+ - Mild Nudity'
    | 'Rx - Hentai'
    | undefined
  score?: (number | null) | undefined
  scored_by?: (number | null) | undefined
  rank?: (number | null) | undefined
  popularity?: (number | null) | undefined
  members?: (number | null) | undefined
  favorites?: (number | null) | undefined
  synopsis?: (string | null) | undefined
  background?: (string | null) | undefined
  season?: 'summer' | 'winter' | 'spring' | 'fall' | undefined
  year?: (number | null) | undefined
  broadcast?: Broadcast | undefined
  producers?: MalUrl[] | undefined
  licensors?: MalUrl[] | undefined
  studios?: MalUrl[] | undefined
  genres?: MalUrl[] | undefined
  explicit_genres?: MalUrl[] | undefined
  themes?: MalUrl[] | undefined
  demographics?: MalUrl[] | undefined
}
type CharacterImages = {
  jpg?:
    | { image_url?: (string | null) | undefined; small_image_url?: (string | null) | undefined }
    | undefined
  webp?:
    | { image_url?: (string | null) | undefined; small_image_url?: (string | null) | undefined }
    | undefined
}
type PeopleImages = { jpg?: { image_url?: (string | null) | undefined } | undefined }
type AnimeCharacters = {
  data?:
    | {
        character?:
          | {
              mal_id?: number | undefined
              url?: string | undefined
              images?: CharacterImages | undefined
              name?: string | undefined
            }
          | undefined
        role?: string | undefined
        voice_actors?:
          | {
              person?:
                | {
                    mal_id?: number | undefined
                    url?: string | undefined
                    images?: PeopleImages | undefined
                    name?: string | undefined
                  }
                | undefined
              language?: string | undefined
            }[]
          | undefined
      }[]
    | undefined
}
type AnimeStaff = {
  data?:
    | {
        person?:
          | {
              mal_id?: number | undefined
              url?: string | undefined
              images?: PeopleImages | undefined
              name?: string | undefined
            }
          | undefined
        positions?: string[] | undefined
      }[]
    | undefined
}
type AnimeEpisodes = {
  data?:
    | {
        mal_id?: number | undefined
        url?: (string | null) | undefined
        title?: string | undefined
        title_japanese?: (string | null) | undefined
        title_romanji?: (string | null) | undefined
        aired?: (string | null) | undefined
        score?: (unknown | null) | undefined
        filler?: boolean | undefined
        recap?: boolean | undefined
        forum_url?: (string | null) | undefined
      }[]
    | undefined
  pagination?:
    | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
    | undefined
}
type AnimeEpisode = {
  mal_id?: number | undefined
  url?: string | undefined
  title?: string | undefined
  title_japanese?: (string | null) | undefined
  title_romanji?: (string | null) | undefined
  duration?: (number | null) | undefined
  aired?: (string | null) | undefined
  filler?: boolean | undefined
  recap?: boolean | undefined
  synopsis?: (string | null) | undefined
}
type CommonImages = { jpg?: { image_url?: (string | null) | undefined } | undefined }
type AnimeNews = {
  pagination?:
    | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
    | undefined
  data?:
    | {
        mal_id?: number | undefined
        url?: string | undefined
        title?: string | undefined
        date?: string | undefined
        author_username?: string | undefined
        author_url?: string | undefined
        forum_url?: string | undefined
        images?: CommonImages | undefined
        comments?: number | undefined
        excerpt?: string | undefined
      }[]
    | undefined
}
type Forum = {
  data?:
    | {
        mal_id?: number | undefined
        url?: string | undefined
        title?: string | undefined
        date?: string | undefined
        author_username?: string | undefined
        author_url?: string | undefined
        comments?: number | undefined
        last_comment?:
          | {
              url?: string | undefined
              author_username?: string | undefined
              author_url?: string | undefined
              date?: (string | null) | undefined
            }
          | undefined
      }[]
    | undefined
}
type Trailer = {
  youtube_id?: (string | null) | undefined
  url?: (string | null) | undefined
  embed_url?: (string | null) | undefined
  images?:
    | {
        image_url?: (string | null) | undefined
        small_image_url?: (string | null) | undefined
        medium_image_url?: (string | null) | undefined
        large_image_url?: (string | null) | undefined
        maximum_image_url?: (string | null) | undefined
      }
    | undefined
}
type AnimeVideos = {
  data?:
    | {
        promo?: { title?: string | undefined; trailer?: Trailer | undefined }[] | undefined
        episodes?:
          | {
              mal_id?: number | undefined
              url?: string | undefined
              title?: string | undefined
              episode?: string | undefined
              images?: CommonImages | undefined
            }[]
          | undefined
        music_videos?:
          | {
              title?: string | undefined
              video?: Trailer | undefined
              meta?:
                | { title?: (string | null) | undefined; author?: (string | null) | undefined }
                | undefined
            }[]
          | undefined
      }
    | undefined
}
type AnimeVideosEpisodes = {
  data?:
    | {
        mal_id?: number | undefined
        title?: string | undefined
        episode?: string | undefined
        url?: string | undefined
        images?: CommonImages | undefined
      }[]
    | undefined
  pagination?:
    | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
    | undefined
}
type PicturesVariants = { data?: { images?: CommonImages | undefined }[] | undefined }
type AnimeStatistics = {
  data?:
    | {
        watching?: number | undefined
        completed?: number | undefined
        on_hold?: number | undefined
        dropped?: number | undefined
        plan_to_watch?: number | undefined
        total?: number | undefined
        scores?:
          | {
              score?: number | undefined
              votes?: number | undefined
              percentage?: number | undefined
            }[]
          | undefined
      }
    | undefined
}
type Moreinfo = { data?: { moreinfo?: (string | null) | undefined } | undefined }
type AnimeMeta = {
  mal_id?: number | undefined
  url?: string | undefined
  images?: AnimeImages | undefined
  title?: string | undefined
}
type MangaImages = {
  jpg?:
    | {
        image_url?: (string | null) | undefined
        small_image_url?: (string | null) | undefined
        large_image_url?: (string | null) | undefined
      }
    | undefined
  webp?:
    | {
        image_url?: (string | null) | undefined
        small_image_url?: (string | null) | undefined
        large_image_url?: (string | null) | undefined
      }
    | undefined
}
type MangaMeta = {
  mal_id?: number | undefined
  url?: string | undefined
  images?: MangaImages | undefined
  title?: string | undefined
}
type EntryRecommendations = { data?: { entry?: AnimeMeta | MangaMeta | undefined }[] | undefined }
type UserImages = {
  jpg?: { image_url?: (string | null) | undefined } | undefined
  webp?: { image_url?: (string | null) | undefined } | undefined
}
type UserMeta = {
  username?: string | undefined
  url?: string | undefined
  images?: UserImages | undefined
}
type AnimeUserupdates = {
  data?:
    | {
        user?: UserMeta | undefined
        score?: (number | null) | undefined
        status?: string | undefined
        episodes_seen?: (number | null) | undefined
        episodes_total?: (number | null) | undefined
        date?: string | undefined
      }[]
    | undefined
  pagination?:
    | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
    | undefined
}
type AnimeReviews = {
  data?:
    | {
        user?: UserMeta | undefined
        mal_id?: number | undefined
        url?: string | undefined
        type?: string | undefined
        reactions?:
          | {
              overall?: number | undefined
              nice?: number | undefined
              love_it?: number | undefined
              funny?: number | undefined
              confusing?: number | undefined
              informative?: number | undefined
              well_written?: number | undefined
              creative?: number | undefined
            }
          | undefined
        date?: string | undefined
        review?: string | undefined
        score?: number | undefined
        tags?: string[] | undefined
        is_spoiler?: boolean | undefined
        is_preliminary?: boolean | undefined
        episodes_watched?: number | undefined
      }[]
    | undefined
  pagination?:
    | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
    | undefined
}
type Relation = { relation?: string | undefined; entry?: MalUrl[] | undefined }
type AnimeThemes = {
  data?: { openings?: string[] | undefined; endings?: string[] | undefined } | undefined
}
type ExternalLinks = {
  data?: { name?: string | undefined; url?: string | undefined }[] | undefined
}
type PersonMeta = {
  mal_id?: number | undefined
  url?: string | undefined
  images?: PeopleImages | undefined
  name?: string | undefined
}
type CharacterFull = {
  mal_id?: number | undefined
  url?: string | undefined
  images?: CharacterImages | undefined
  name?: string | undefined
  name_kanji?: (string | null) | undefined
  nicknames?: string[] | undefined
  favorites?: number | undefined
  about?: (string | null) | undefined
  anime?: { role?: string | undefined; anime?: AnimeMeta | undefined }[] | undefined
  manga?: { role?: string | undefined; manga?: MangaMeta | undefined }[] | undefined
  voices?: { language?: string | undefined; person?: PersonMeta | undefined }[] | undefined
}
type Character = {
  mal_id?: number | undefined
  url?: string | undefined
  images?: CharacterImages | undefined
  name?: string | undefined
  name_kanji?: (string | null) | undefined
  nicknames?: string[] | undefined
  favorites?: number | undefined
  about?: (string | null) | undefined
}
type CharacterAnime = {
  data?: { role?: string | undefined; anime?: AnimeMeta | undefined }[] | undefined
}
type CharacterManga = {
  data?: { role?: string | undefined; manga?: MangaMeta | undefined }[] | undefined
}
type CharacterVoiceActors = {
  data?: { language?: string | undefined; person?: PersonMeta | undefined }[] | undefined
}
type CharacterPictures = {
  data?:
    | { image_url?: (string | null) | undefined; large_image_url?: (string | null) | undefined }[]
    | undefined
}
type Club = {
  mal_id?: number | undefined
  name?: string | undefined
  url?: string | undefined
  images?: CommonImages | undefined
  members?: number | undefined
  category?:
    | 'actors & artists'
    | 'anime'
    | 'characters'
    | 'cities & neighborhoods'
    | 'companies'
    | 'conventions'
    | 'games'
    | 'japan'
    | 'manga'
    | 'music'
    | 'others'
    | 'schools'
    | undefined
  created?: string | undefined
  access?: 'public' | 'private' | 'secret' | undefined
}
type ClubStaff = {
  data?: { url?: string | undefined; username?: string | undefined }[] | undefined
}
type ClubRelations = {
  data?:
    | {
        anime?: MalUrl[] | undefined
        manga?: MalUrl[] | undefined
        characters?: MalUrl[] | undefined
      }
    | undefined
}
type GenreQueryFilter = 'genres' | 'explicit_genres' | 'themes' | 'demographics'
type Genre = {
  mal_id?: number | undefined
  name?: string | undefined
  url?: string | undefined
  count?: number | undefined
}
type Genres = { data?: Genre[] | undefined }
type MagazinesQueryOrderby = 'mal_id' | 'name' | 'count'
type SearchQuerySort = 'desc' | 'asc'
type Magazine = {
  mal_id?: number | undefined
  name?: string | undefined
  url?: string | undefined
  count?: number | undefined
}
type Magazines = {
  data?: Magazine[] | undefined
  pagination?:
    | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
    | undefined
}
type MangaFull = {
  mal_id?: number | undefined
  url?: string | undefined
  images?: MangaImages | undefined
  approved?: boolean | undefined
  titles?: Title[] | undefined
  title?: string | undefined
  title_english?: (string | null) | undefined
  title_japanese?: (string | null) | undefined
  title_synonyms?: string[] | undefined
  type?:
    | 'Manga'
    | 'Novel'
    | 'Light Novel'
    | 'One-shot'
    | 'Doujinshi'
    | 'Manhua'
    | 'Manhwa'
    | 'OEL'
    | undefined
  chapters?: (number | null) | undefined
  volumes?: (number | null) | undefined
  status?:
    | 'Finished'
    | 'Publishing'
    | 'On Hiatus'
    | 'Discontinued'
    | 'Not yet published'
    | undefined
  publishing?: boolean | undefined
  published?: Daterange | undefined
  score?: (number | null) | undefined
  scored_by?: (number | null) | undefined
  rank?: (number | null) | undefined
  popularity?: (number | null) | undefined
  members?: (number | null) | undefined
  favorites?: (number | null) | undefined
  synopsis?: (string | null) | undefined
  background?: (string | null) | undefined
  authors?: MalUrl[] | undefined
  serializations?: MalUrl[] | undefined
  genres?: MalUrl[] | undefined
  explicit_genres?: MalUrl[] | undefined
  themes?: MalUrl[] | undefined
  demographics?: MalUrl[] | undefined
  relations?: { relation?: string | undefined; entry?: MalUrl[] | undefined }[] | undefined
  external?: { name?: string | undefined; url?: string | undefined }[] | undefined
}
type Manga = {
  mal_id?: number | undefined
  url?: string | undefined
  images?: MangaImages | undefined
  approved?: boolean | undefined
  titles?: Title[] | undefined
  title?: string | undefined
  title_english?: (string | null) | undefined
  title_japanese?: (string | null) | undefined
  type?:
    | 'Manga'
    | 'Novel'
    | 'Light Novel'
    | 'One-shot'
    | 'Doujinshi'
    | 'Manhua'
    | 'Manhwa'
    | 'OEL'
    | undefined
  chapters?: (number | null) | undefined
  volumes?: (number | null) | undefined
  status?:
    | 'Finished'
    | 'Publishing'
    | 'On Hiatus'
    | 'Discontinued'
    | 'Not yet published'
    | undefined
  publishing?: boolean | undefined
  published?: Daterange | undefined
  score?: (number | null) | undefined
  scored_by?: (number | null) | undefined
  rank?: (number | null) | undefined
  popularity?: (number | null) | undefined
  members?: (number | null) | undefined
  favorites?: (number | null) | undefined
  synopsis?: (string | null) | undefined
  background?: (string | null) | undefined
  authors?: MalUrl[] | undefined
  serializations?: MalUrl[] | undefined
  genres?: MalUrl[] | undefined
  explicit_genres?: MalUrl[] | undefined
  themes?: MalUrl[] | undefined
  demographics?: MalUrl[] | undefined
}
type CharacterMeta = {
  mal_id?: number | undefined
  url?: string | undefined
  images?: CharacterImages | undefined
  name?: string | undefined
}
type MangaCharacters = {
  data?: { character?: CharacterMeta | undefined; role?: string | undefined }[] | undefined
}
type MangaNews = {
  pagination?:
    | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
    | undefined
  data?:
    | {
        mal_id?: number | undefined
        url?: string | undefined
        title?: string | undefined
        date?: string | undefined
        author_username?: string | undefined
        author_url?: string | undefined
        forum_url?: string | undefined
        images?: CommonImages | undefined
        comments?: number | undefined
        excerpt?: string | undefined
      }[]
    | undefined
}
type MangaPictures = { data?: MangaImages[] | undefined }
type MangaStatistics = {
  data?:
    | {
        reading?: number | undefined
        completed?: number | undefined
        on_hold?: number | undefined
        dropped?: number | undefined
        plan_to_read?: number | undefined
        total?: number | undefined
        scores?:
          | {
              score?: number | undefined
              votes?: number | undefined
              percentage?: number | undefined
            }[]
          | undefined
      }
    | undefined
}
type MangaUserupdates = {
  data?:
    | {
        user?: UserMeta | undefined
        score?: (number | null) | undefined
        status?: string | undefined
        volumes_read?: number | undefined
        volumes_total?: number | undefined
        chapters_read?: number | undefined
        chapters_total?: number | undefined
        date?: string | undefined
      }[]
    | undefined
  pagination?:
    | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
    | undefined
}
type MangaReviews = {
  data?:
    | {
        user?: UserMeta | undefined
        mal_id?: number | undefined
        url?: string | undefined
        type?: string | undefined
        reactions?:
          | {
              overall?: number | undefined
              nice?: number | undefined
              love_it?: number | undefined
              funny?: number | undefined
              confusing?: number | undefined
              informative?: number | undefined
              well_written?: number | undefined
              creative?: number | undefined
            }
          | undefined
        date?: string | undefined
        review?: string | undefined
        score?: number | undefined
        tags?: string[] | undefined
        is_spoiler?: boolean | undefined
        is_preliminary?: boolean | undefined
      }[]
    | undefined
  pagination?:
    | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
    | undefined
}
type PersonFull = {
  mal_id?: number | undefined
  url?: string | undefined
  website_url?: (string | null) | undefined
  images?: PeopleImages | undefined
  name?: string | undefined
  given_name?: (string | null) | undefined
  family_name?: (string | null) | undefined
  alternate_names?: string[] | undefined
  birthday?: (string | null) | undefined
  favorites?: number | undefined
  about?: (string | null) | undefined
  anime?: { position?: string | undefined; anime?: AnimeMeta | undefined }[] | undefined
  manga?: { position?: string | undefined; manga?: MangaMeta | undefined }[] | undefined
  voices?:
    | {
        role?: string | undefined
        anime?: AnimeMeta | undefined
        character?: CharacterMeta | undefined
      }[]
    | undefined
}
type Person = {
  mal_id?: number | undefined
  url?: string | undefined
  website_url?: (string | null) | undefined
  images?: PeopleImages | undefined
  name?: string | undefined
  given_name?: (string | null) | undefined
  family_name?: (string | null) | undefined
  alternate_names?: string[] | undefined
  birthday?: (string | null) | undefined
  favorites?: number | undefined
  about?: (string | null) | undefined
}
type PersonAnime = {
  data?: { position?: string | undefined; anime?: AnimeMeta | undefined }[] | undefined
}
type PersonVoiceActingRoles = {
  data?:
    | {
        role?: string | undefined
        anime?: AnimeMeta | undefined
        character?: CharacterMeta | undefined
      }[]
    | undefined
}
type PersonManga = {
  data?: { position?: string | undefined; manga?: MangaMeta | undefined }[] | undefined
}
type PersonPictures = { data?: PeopleImages[] | undefined }
type Producer = {
  mal_id?: number | undefined
  url?: string | undefined
  titles?: Title[] | undefined
  images?: CommonImages | undefined
  favorites?: number | undefined
  count?: number | undefined
  established?: (string | null) | undefined
  about?: (string | null) | undefined
}
type ProducerFull = {
  mal_id?: number | undefined
  url?: string | undefined
  titles?: Title[] | undefined
  images?: CommonImages | undefined
  favorites?: number | undefined
  count?: number | undefined
  established?: (string | null) | undefined
  about?: (string | null) | undefined
  external?: { name?: string | undefined; url?: string | undefined }[] | undefined
}
type UserProfile = {
  mal_id?: (number | null) | undefined
  username?: string | undefined
  url?: string | undefined
  images?: UserImages | undefined
  last_online?: (string | null) | undefined
  gender?: (string | null) | undefined
  birthday?: (string | null) | undefined
  location?: (string | null) | undefined
  joined?: (string | null) | undefined
}
type UserById = { url?: string | undefined; username?: string | undefined }
type Recommendations = {
  data?:
    | {
        mal_id?: string | undefined
        entry?: (AnimeMeta | MangaMeta)[] | undefined
        content?: string | undefined
        user?: UserById | undefined
      }[]
    | undefined
  pagination?:
    | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
    | undefined
}
type Schedules = {
  data?: Anime[] | undefined
  pagination?:
    | {
        last_visible_page?: number | undefined
        has_next_page?: boolean | undefined
        current_page?: number | undefined
        items?:
          | {
              count?: number | undefined
              total?: number | undefined
              per_page?: number | undefined
            }
          | undefined
      }
    | undefined
}
type AnimeSearchQueryType = {}
type AnimeSearchQueryStatus = 'airing' | 'complete' | 'upcoming'
type AnimeSearchQueryRating = 'g' | 'pg' | 'pg13' | 'r17' | 'r' | 'rx'
type AnimeSearchQueryOrderby =
  | 'mal_id'
  | 'title'
  | 'start_date'
  | 'end_date'
  | 'episodes'
  | 'score'
  | 'scored_by'
  | 'rank'
  | 'popularity'
  | 'members'
  | 'favorites'
type AnimeSearch = {
  data?: Anime[] | undefined
  pagination?:
    | {
        last_visible_page?: number | undefined
        has_next_page?: boolean | undefined
        current_page?: number | undefined
        items?:
          | {
              count?: number | undefined
              total?: number | undefined
              per_page?: number | undefined
            }
          | undefined
      }
    | undefined
}
type MangaSearchQueryType =
  | 'manga'
  | 'novel'
  | 'lightnovel'
  | 'oneshot'
  | 'doujin'
  | 'manhwa'
  | 'manhua'
type MangaSearchQueryStatus = 'publishing' | 'complete' | 'hiatus' | 'discontinued' | 'upcoming'
type MangaSearchQueryOrderby =
  | 'mal_id'
  | 'title'
  | 'start_date'
  | 'end_date'
  | 'chapters'
  | 'volumes'
  | 'score'
  | 'scored_by'
  | 'rank'
  | 'popularity'
  | 'members'
  | 'favorites'
type MangaSearch = {
  data?: Manga[] | undefined
  pagination?:
    | {
        last_visible_page?: number | undefined
        has_next_page?: boolean | undefined
        current_page?: number | undefined
        items?:
          | {
              count?: number | undefined
              total?: number | undefined
              per_page?: number | undefined
            }
          | undefined
      }
    | undefined
}
type PeopleSearchQueryOrderby = 'mal_id' | 'name' | 'birthday' | 'favorites'
type PeopleSearch = {
  data?:
    | {
        mal_id?: number | undefined
        url?: string | undefined
        website_url?: (string | null) | undefined
        images?: PeopleImages | undefined
        name?: string | undefined
        given_name?: (string | null) | undefined
        family_name?: (string | null) | undefined
        alternate_names?: string[] | undefined
        birthday?: (string | null) | undefined
        favorites?: number | undefined
        about?: (string | null) | undefined
      }[]
    | undefined
  pagination?:
    | {
        last_visible_page?: number | undefined
        has_next_page?: boolean | undefined
        current_page?: number | undefined
        items?:
          | {
              count?: number | undefined
              total?: number | undefined
              per_page?: number | undefined
            }
          | undefined
      }
    | undefined
}
type CharactersSearchQueryOrderby = 'mal_id' | 'name' | 'favorites'
type CharactersSearch = {
  data?: Character[] | undefined
  pagination?:
    | {
        last_visible_page?: number | undefined
        has_next_page?: boolean | undefined
        current_page?: number | undefined
        items?:
          | {
              count?: number | undefined
              total?: number | undefined
              per_page?: number | undefined
            }
          | undefined
      }
    | undefined
}
type UsersSearchQueryGender = 'any' | 'male' | 'female' | 'nonbinary'
type UsersSearch = {
  data?:
    | {
        url?: string | undefined
        username?: string | undefined
        images?: UserImages | undefined
        last_online?: string | undefined
      }[]
    | undefined
  pagination?:
    | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
    | undefined
}
type ClubSearchQueryType = 'public' | 'private' | 'secret'
type ClubSearchQueryCategory =
  | 'anime'
  | 'manga'
  | 'actors_and_artists'
  | 'characters'
  | 'cities_and_neighborhoods'
  | 'companies'
  | 'conventions'
  | 'games'
  | 'japan'
  | 'music'
  | 'other'
  | 'schools'
type ClubSearchQueryOrderby = 'mal_id' | 'name' | 'members_count' | 'created'
type ClubsSearch = {
  data?: Club[] | undefined
  pagination?:
    | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
    | undefined
}
type ProducersQueryOrderby = 'mal_id' | 'count' | 'favorites' | 'established'
type Producers = {
  data?: Producer[] | undefined
  pagination?:
    | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
    | undefined
}
type Seasons = {
  data?: { year?: number | undefined; seasons?: string[] | undefined }[] | undefined
}
type TopAnimeFilter = 'airing' | 'upcoming' | 'bypopularity' | 'favorite'
type TopMangaFilter = 'publishing' | 'upcoming' | 'bypopularity' | 'favorite'
type TopReviewsTypeEnum = 'anime' | 'manga'
type UserProfileFull = {
  mal_id?: (number | null) | undefined
  username?: string | undefined
  url?: string | undefined
  images?: UserImages | undefined
  last_online?: (string | null) | undefined
  gender?: (string | null) | undefined
  birthday?: (string | null) | undefined
  location?: (string | null) | undefined
  joined?: (string | null) | undefined
  statistics?:
    | {
        anime?:
          | {
              days_watched?: number | undefined
              mean_score?: number | undefined
              watching?: number | undefined
              completed?: number | undefined
              on_hold?: number | undefined
              dropped?: number | undefined
              plan_to_watch?: number | undefined
              total_entries?: number | undefined
              rewatched?: number | undefined
              episodes_watched?: number | undefined
            }
          | undefined
        manga?:
          | {
              days_read?: number | undefined
              mean_score?: number | undefined
              reading?: number | undefined
              completed?: number | undefined
              on_hold?: number | undefined
              dropped?: number | undefined
              plan_to_read?: number | undefined
              total_entries?: number | undefined
              reread?: number | undefined
              chapters_read?: number | undefined
              volumes_read?: number | undefined
            }
          | undefined
      }
    | undefined
  external?: { name?: string | undefined; url?: string | undefined }[] | undefined
}
type UserStatistics = {
  data?:
    | {
        anime?:
          | {
              days_watched?: number | undefined
              mean_score?: number | undefined
              watching?: number | undefined
              completed?: number | undefined
              on_hold?: number | undefined
              dropped?: number | undefined
              plan_to_watch?: number | undefined
              total_entries?: number | undefined
              rewatched?: number | undefined
              episodes_watched?: number | undefined
            }
          | undefined
        manga?:
          | {
              days_read?: number | undefined
              mean_score?: number | undefined
              reading?: number | undefined
              completed?: number | undefined
              on_hold?: number | undefined
              dropped?: number | undefined
              plan_to_read?: number | undefined
              total_entries?: number | undefined
              reread?: number | undefined
              chapters_read?: number | undefined
              volumes_read?: number | undefined
            }
          | undefined
      }
    | undefined
}
type UserFavorites = {
  anime?:
    | {
        type?: string | undefined
        start_year?: number | undefined
        mal_id?: number | undefined
        url?: string | undefined
        images?: AnimeImages | undefined
        title?: string | undefined
      }[]
    | undefined
  manga?:
    | {
        type?: string | undefined
        start_year?: number | undefined
        mal_id?: number | undefined
        url?: string | undefined
        images?: MangaImages | undefined
        title?: string | undefined
      }[]
    | undefined
  characters?:
    | {
        mal_id?: number | undefined
        url?: string | undefined
        images?: CharacterImages | undefined
        name?: string | undefined
        type?: string | undefined
        title?: string | undefined
      }[]
    | undefined
  people?: CharacterMeta[] | undefined
}
type UserUpdates = {
  data?:
    | {
        anime?:
          | {
              entry?: AnimeMeta | undefined
              score?: (number | null) | undefined
              status?: string | undefined
              episodes_seen?: (number | null) | undefined
              episodes_total?: (number | null) | undefined
              date?: string | undefined
            }[]
          | undefined
        manga?:
          | {
              entry?: MangaMeta | undefined
              score?: (number | null) | undefined
              status?: string | undefined
              chapters_read?: (number | null) | undefined
              chapters_total?: (number | null) | undefined
              volumes_read?: (number | null) | undefined
              volumes_total?: (number | null) | undefined
              date?: string | undefined
            }[]
          | undefined
      }
    | undefined
}
type UserAbout = { data?: { about?: (string | null) | undefined }[] | undefined }
type History = {
  entry?: MalUrl | undefined
  increment?: number | undefined
  date?: string | undefined
}
type UserHistory = { data?: History[] | undefined }
type UserFriends = {
  data?:
    | {
        user?: UserMeta | undefined
        last_online?: string | undefined
        friends_since?: string | undefined
      }[]
    | undefined
  pagination?:
    | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
    | undefined
}
type UserAnimeListStatusFilter =
  | 'all'
  | 'watching'
  | 'completed'
  | 'onhold'
  | 'dropped'
  | 'plantowatch'
type UserMangaListStatusFilter =
  | 'all'
  | 'reading'
  | 'completed'
  | 'onhold'
  | 'dropped'
  | 'plantoread'
type UserClubs = {
  data?:
    | { mal_id?: number | undefined; name?: string | undefined; url?: string | undefined }[]
    | undefined
  pagination?:
    | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
    | undefined
}
type WatchEpisodes = {
  data?:
    | {
        entry?: AnimeMeta | undefined
        episodes?:
          | {
              mal_id?: string | undefined
              url?: string | undefined
              title?: string | undefined
              premium?: boolean | undefined
            }[]
          | undefined
        region_locked?: boolean | undefined
      }[]
    | undefined
  pagination?:
    | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
    | undefined
}
type WatchPromos = {
  pagination?:
    | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
    | undefined
  data?:
    | { title?: string | undefined; entry?: AnimeMeta | undefined; trailer?: Trailer | undefined }[]
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/anime/:id/full': {
      $get:
        | {
            input: { param: { id: number } }
            output: { data?: AnimeFull | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/anime/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: { data?: Anime | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/anime/:id/characters': {
      $get:
        | {
            input: { param: { id: number } }
            output: AnimeCharacters
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/anime/:id/staff': {
      $get:
        | {
            input: { param: { id: number } }
            output: AnimeStaff
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/anime/:id/episodes': {
      $get:
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: AnimeEpisodes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/anime/:id/episodes/:episode': {
      $get:
        | {
            input: { param: { id: number; episode: number } }
            output: { data?: AnimeEpisode | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; episode: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/anime/:id/news': {
      $get:
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: AnimeNews
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/anime/:id/forum': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { filter?: 'all' | 'episode' | 'other' | undefined }
            }
            output: Forum
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { filter?: 'all' | 'episode' | 'other' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/anime/:id/videos': {
      $get:
        | {
            input: { param: { id: number } }
            output: AnimeVideos
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/anime/:id/videos/episodes': {
      $get:
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: AnimeVideosEpisodes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/anime/:id/pictures': {
      $get:
        | {
            input: { param: { id: number } }
            output: PicturesVariants
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/anime/:id/statistics': {
      $get:
        | {
            input: { param: { id: number } }
            output: AnimeStatistics
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/anime/:id/moreinfo': {
      $get:
        | { input: { param: { id: number } }; output: Moreinfo; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/anime/:id/recommendations': {
      $get:
        | {
            input: { param: { id: number } }
            output: EntryRecommendations
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/anime/:id/userupdates': {
      $get:
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: AnimeUserupdates
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/anime/:id/reviews': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                page?: number | undefined
                preliminary?: boolean | undefined
                spoilers?: boolean | undefined
              }
            }
            output: AnimeReviews
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                page?: number | undefined
                preliminary?: boolean | undefined
                spoilers?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/anime/:id/relations': {
      $get: {
        input: { param: { id: number } }
        output: { data?: Relation[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/anime/:id/themes': {
      $get:
        | {
            input: { param: { id: number } }
            output: AnimeThemes
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/anime/:id/external': {
      $get:
        | {
            input: { param: { id: number } }
            output: ExternalLinks
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/anime/:id/streaming': {
      $get:
        | {
            input: { param: { id: number } }
            output: ExternalLinks
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/characters/:id/full': {
      $get:
        | {
            input: { param: { id: number } }
            output: { data?: CharacterFull | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/characters/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: { data?: Character | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/characters/:id/anime': {
      $get:
        | {
            input: { param: { id: number } }
            output: CharacterAnime
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/characters/:id/manga': {
      $get:
        | {
            input: { param: { id: number } }
            output: CharacterManga
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/characters/:id/voices': {
      $get:
        | {
            input: { param: { id: number } }
            output: CharacterVoiceActors
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/characters/:id/pictures': {
      $get:
        | {
            input: { param: { id: number } }
            output: CharacterPictures
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/clubs/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: { data?: Club | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/clubs/:id/members': {
      $get:
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: {
              pagination?:
                | { last_visible_page?: number | undefined; has_next_page?: boolean | undefined }
                | undefined
              data?:
                | {
                    username?: string | undefined
                    url?: string | undefined
                    images?: UserImages | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/clubs/:id/staff': {
      $get:
        | { input: { param: { id: number } }; output: ClubStaff; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/clubs/:id/relations': {
      $get:
        | {
            input: { param: { id: number } }
            output: ClubRelations
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/genres/anime': {
      $get:
        | {
            input: { query: { filter?: GenreQueryFilter | undefined } }
            output: Genres
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filter?: GenreQueryFilter | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/genres/manga': {
      $get:
        | {
            input: { query: { filter?: GenreQueryFilter | undefined } }
            output: Genres
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filter?: GenreQueryFilter | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/magazines': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                q?: string | undefined
                order_by?: MagazinesQueryOrderby | undefined
                sort?: SearchQuerySort | undefined
                letter?: string | undefined
              }
            }
            output: Magazines
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                q?: string | undefined
                order_by?: MagazinesQueryOrderby | undefined
                sort?: SearchQuerySort | undefined
                letter?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/manga/:id/full': {
      $get:
        | {
            input: { param: { id: number } }
            output: { data?: MangaFull | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/manga/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: { data?: Manga | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/manga/:id/characters': {
      $get:
        | {
            input: { param: { id: number } }
            output: MangaCharacters
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/manga/:id/news': {
      $get:
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: MangaNews
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/manga/:id/forum': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { filter?: 'all' | 'episode' | 'other' | undefined }
            }
            output: Forum
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { filter?: 'all' | 'episode' | 'other' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/manga/:id/pictures': {
      $get:
        | {
            input: { param: { id: number } }
            output: MangaPictures
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/manga/:id/statistics': {
      $get:
        | {
            input: { param: { id: number } }
            output: MangaStatistics
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/manga/:id/moreinfo': {
      $get:
        | { input: { param: { id: number } }; output: Moreinfo; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/manga/:id/recommendations': {
      $get:
        | {
            input: { param: { id: number } }
            output: EntryRecommendations
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/manga/:id/userupdates': {
      $get:
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: MangaUserupdates
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/manga/:id/reviews': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                page?: number | undefined
                preliminary?: boolean | undefined
                spoilers?: boolean | undefined
              }
            }
            output: MangaReviews
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                page?: number | undefined
                preliminary?: boolean | undefined
                spoilers?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/manga/:id/relations': {
      $get:
        | {
            input: { param: { id: number } }
            output: { data?: Relation[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/manga/:id/external': {
      $get:
        | {
            input: { param: { id: number } }
            output: ExternalLinks
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/people/:id/full': {
      $get:
        | {
            input: { param: { id: number } }
            output: { data?: PersonFull | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/people/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: { data?: Person | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/people/:id/anime': {
      $get:
        | {
            input: { param: { id: number } }
            output: PersonAnime
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/people/:id/voices': {
      $get:
        | {
            input: { param: { id: number } }
            output: PersonVoiceActingRoles
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/people/:id/manga': {
      $get:
        | {
            input: { param: { id: number } }
            output: PersonManga
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/people/:id/pictures': {
      $get:
        | {
            input: { param: { id: number } }
            output: PersonPictures
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/producers/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: { data?: Producer | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/producers/:id/full': {
      $get:
        | {
            input: { param: { id: number } }
            output: { data?: ProducerFull | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/producers/:id/external': {
      $get:
        | {
            input: { param: { id: number } }
            output: ExternalLinks
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/random/anime': {
      $get:
        | { input: {}; output: { data?: Anime | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/random/manga': {
      $get:
        | { input: {}; output: { data?: Manga | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/random/characters': {
      $get:
        | { input: {}; output: { data?: Character | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/random/people': {
      $get:
        | { input: {}; output: { data?: Person | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/random/users': {
      $get:
        | {
            input: {}
            output: { data?: UserProfile | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/recommendations/anime': {
      $get:
        | {
            input: { query: { page?: number | undefined } }
            output: Recommendations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/recommendations/manga': {
      $get:
        | {
            input: { query: { page?: number | undefined } }
            output: Recommendations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/reviews/anime': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                preliminary?: boolean | undefined
                spoilers?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                preliminary?: boolean | undefined
                spoilers?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/reviews/manga': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                preliminary?: boolean | undefined
                spoilers?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                preliminary?: boolean | undefined
                spoilers?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/schedules': {
      $get:
        | {
            input: {
              query: {
                filter?:
                  | 'monday'
                  | 'tuesday'
                  | 'wednesday'
                  | 'thursday'
                  | 'friday'
                  | 'saturday'
                  | 'sunday'
                  | 'unknown'
                  | 'other'
                  | undefined
                kids?: 'true' | 'false' | undefined
                sfw?: 'true' | 'false' | undefined
                unapproved?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Schedules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?:
                  | 'monday'
                  | 'tuesday'
                  | 'wednesday'
                  | 'thursday'
                  | 'friday'
                  | 'saturday'
                  | 'sunday'
                  | 'unknown'
                  | 'other'
                  | undefined
                kids?: 'true' | 'false' | undefined
                sfw?: 'true' | 'false' | undefined
                unapproved?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/anime': {
      $get:
        | {
            input: {
              query: {
                unapproved?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
                q?: string | undefined
                type?: AnimeSearchQueryType | undefined
                score?: number | undefined
                min_score?: number | undefined
                max_score?: number | undefined
                status?: AnimeSearchQueryStatus | undefined
                rating?: AnimeSearchQueryRating | undefined
                sfw?: boolean | undefined
                genres?: string | undefined
                genres_exclude?: string | undefined
                order_by?: AnimeSearchQueryOrderby | undefined
                sort?: SearchQuerySort | undefined
                letter?: string | undefined
                producers?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: AnimeSearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                unapproved?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
                q?: string | undefined
                type?: AnimeSearchQueryType | undefined
                score?: number | undefined
                min_score?: number | undefined
                max_score?: number | undefined
                status?: AnimeSearchQueryStatus | undefined
                rating?: AnimeSearchQueryRating | undefined
                sfw?: boolean | undefined
                genres?: string | undefined
                genres_exclude?: string | undefined
                order_by?: AnimeSearchQueryOrderby | undefined
                sort?: SearchQuerySort | undefined
                letter?: string | undefined
                producers?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/manga': {
      $get:
        | {
            input: {
              query: {
                unapproved?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
                q?: string | undefined
                type?: MangaSearchQueryType | undefined
                score?: number | undefined
                min_score?: number | undefined
                max_score?: number | undefined
                status?: MangaSearchQueryStatus | undefined
                sfw?: boolean | undefined
                genres?: string | undefined
                genres_exclude?: string | undefined
                order_by?: MangaSearchQueryOrderby | undefined
                sort?: SearchQuerySort | undefined
                letter?: string | undefined
                magazines?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: MangaSearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                unapproved?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
                q?: string | undefined
                type?: MangaSearchQueryType | undefined
                score?: number | undefined
                min_score?: number | undefined
                max_score?: number | undefined
                status?: MangaSearchQueryStatus | undefined
                sfw?: boolean | undefined
                genres?: string | undefined
                genres_exclude?: string | undefined
                order_by?: MangaSearchQueryOrderby | undefined
                sort?: SearchQuerySort | undefined
                letter?: string | undefined
                magazines?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/people': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                q?: string | undefined
                order_by?: PeopleSearchQueryOrderby | undefined
                sort?: SearchQuerySort | undefined
                letter?: string | undefined
              }
            }
            output: PeopleSearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                q?: string | undefined
                order_by?: PeopleSearchQueryOrderby | undefined
                sort?: SearchQuerySort | undefined
                letter?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/characters': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                q?: string | undefined
                order_by?: CharactersSearchQueryOrderby | undefined
                sort?: SearchQuerySort | undefined
                letter?: string | undefined
              }
            }
            output: CharactersSearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                q?: string | undefined
                order_by?: CharactersSearchQueryOrderby | undefined
                sort?: SearchQuerySort | undefined
                letter?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                q?: string | undefined
                gender?: UsersSearchQueryGender | undefined
                location?: string | undefined
                maxAge?: number | undefined
                minAge?: number | undefined
              }
            }
            output: UsersSearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                q?: string | undefined
                gender?: UsersSearchQueryGender | undefined
                location?: string | undefined
                maxAge?: number | undefined
                minAge?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/userbyid/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: { data?: UserById | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/clubs': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                q?: string | undefined
                type?: ClubSearchQueryType | undefined
                category?: ClubSearchQueryCategory | undefined
                order_by?: ClubSearchQueryOrderby | undefined
                sort?: SearchQuerySort | undefined
                letter?: string | undefined
              }
            }
            output: ClubsSearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                q?: string | undefined
                type?: ClubSearchQueryType | undefined
                category?: ClubSearchQueryCategory | undefined
                order_by?: ClubSearchQueryOrderby | undefined
                sort?: SearchQuerySort | undefined
                letter?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/producers': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                q?: string | undefined
                order_by?: ProducersQueryOrderby | undefined
                sort?: SearchQuerySort | undefined
                letter?: string | undefined
              }
            }
            output: Producers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                q?: string | undefined
                order_by?: ProducersQueryOrderby | undefined
                sort?: SearchQuerySort | undefined
                letter?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/seasons/now': {
      $get:
        | {
            input: {
              query: {
                filter?: 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music' | undefined
                sfw?: boolean | undefined
                unapproved?: boolean | undefined
                continuing?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: AnimeSearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music' | undefined
                sfw?: boolean | undefined
                unapproved?: boolean | undefined
                continuing?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/seasons/:year/:season': {
      $get:
        | {
            input: { param: { year: number; season: string } } & {
              query: {
                filter?: 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music' | undefined
                sfw?: boolean | undefined
                unapproved?: boolean | undefined
                continuing?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: AnimeSearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number; season: string } } & {
              query: {
                filter?: 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music' | undefined
                sfw?: boolean | undefined
                unapproved?: boolean | undefined
                continuing?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/seasons': {
      $get:
        | { input: {}; output: Seasons; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/seasons/upcoming': {
      $get:
        | {
            input: {
              query: {
                filter?: 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music' | undefined
                sfw?: boolean | undefined
                unapproved?: boolean | undefined
                continuing?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: AnimeSearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music' | undefined
                sfw?: boolean | undefined
                unapproved?: boolean | undefined
                continuing?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/top/anime': {
      $get:
        | {
            input: {
              query: {
                type?: AnimeSearchQueryType | undefined
                filter?: TopAnimeFilter | undefined
                rating?: AnimeSearchQueryRating | undefined
                sfw?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: AnimeSearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type?: AnimeSearchQueryType | undefined
                filter?: TopAnimeFilter | undefined
                rating?: AnimeSearchQueryRating | undefined
                sfw?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/top/manga': {
      $get:
        | {
            input: {
              query: {
                type?: MangaSearchQueryType | undefined
                filter?: TopMangaFilter | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: MangaSearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type?: MangaSearchQueryType | undefined
                filter?: TopMangaFilter | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/top/people': {
      $get:
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: PeopleSearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/top/characters': {
      $get:
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: CharactersSearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/top/reviews': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                type?: TopReviewsTypeEnum | undefined
                preliminary?: boolean | undefined
                spoilers?: boolean | undefined
              }
            }
            output: {
              data?:
                | {
                    data?:
                      | (
                          | {
                              user?: UserMeta | undefined
                              anime?: AnimeMeta | undefined
                              mal_id?: number | undefined
                              url?: string | undefined
                              type?: string | undefined
                              reactions?:
                                | {
                                    overall?: number | undefined
                                    nice?: number | undefined
                                    love_it?: number | undefined
                                    funny?: number | undefined
                                    confusing?: number | undefined
                                    informative?: number | undefined
                                    well_written?: number | undefined
                                    creative?: number | undefined
                                  }
                                | undefined
                              date?: string | undefined
                              review?: string | undefined
                              score?: number | undefined
                              tags?: string[] | undefined
                              is_spoiler?: boolean | undefined
                              is_preliminary?: boolean | undefined
                              episodes_watched?: number | undefined
                            }
                          | {
                              user?: UserMeta | undefined
                              manga?: MangaMeta | undefined
                              mal_id?: number | undefined
                              url?: string | undefined
                              type?: string | undefined
                              reactions?:
                                | {
                                    overall?: number | undefined
                                    nice?: number | undefined
                                    love_it?: number | undefined
                                    funny?: number | undefined
                                    confusing?: number | undefined
                                    informative?: number | undefined
                                    well_written?: number | undefined
                                    creative?: number | undefined
                                  }
                                | undefined
                              date?: string | undefined
                              review?: string | undefined
                              score?: number | undefined
                              tags?: string[] | undefined
                              is_spoiler?: boolean | undefined
                              is_preliminary?: boolean | undefined
                            }
                        )[]
                      | undefined
                    pagination?:
                      | {
                          last_visible_page?: number | undefined
                          has_next_page?: boolean | undefined
                        }
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                type?: TopReviewsTypeEnum | undefined
                preliminary?: boolean | undefined
                spoilers?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/:username/full': {
      $get:
        | {
            input: { param: { username: string } }
            output: { data?: UserProfileFull | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/users/:username': {
      $get:
        | {
            input: { param: { username: string } }
            output: { data?: UserProfile | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/users/:username/statistics': {
      $get:
        | {
            input: { param: { username: string } }
            output: UserStatistics
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/users/:username/favorites': {
      $get:
        | {
            input: { param: { username: string } }
            output: { data?: UserFavorites | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/users/:username/userupdates': {
      $get:
        | {
            input: { param: { username: string } }
            output: UserUpdates
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/users/:username/about': {
      $get:
        | {
            input: { param: { username: string } }
            output: UserAbout
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/users/:username/history': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: { type?: 'anime' | 'manga' | undefined }
            }
            output: UserHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: { type?: 'anime' | 'manga' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/:username/friends': {
      $get:
        | {
            input: { param: { username: string } } & { query: { page?: number | undefined } }
            output: UserFriends
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/:username/animelist': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: { status?: UserAnimeListStatusFilter | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: { status?: UserAnimeListStatusFilter | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/:username/mangalist': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: { status?: UserMangaListStatusFilter | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: { status?: UserMangaListStatusFilter | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/:username/reviews': {
      $get:
        | {
            input: { param: { username: string } } & { query: { page?: number | undefined } }
            output: {
              data?:
                | {
                    data?:
                      | (
                          | {
                              user?: UserMeta | undefined
                              anime?: AnimeMeta | undefined
                              mal_id?: number | undefined
                              url?: string | undefined
                              type?: string | undefined
                              reactions?:
                                | {
                                    overall?: number | undefined
                                    nice?: number | undefined
                                    love_it?: number | undefined
                                    funny?: number | undefined
                                    confusing?: number | undefined
                                    informative?: number | undefined
                                    well_written?: number | undefined
                                    creative?: number | undefined
                                  }
                                | undefined
                              date?: string | undefined
                              review?: string | undefined
                              score?: number | undefined
                              tags?: string[] | undefined
                              is_spoiler?: boolean | undefined
                              is_preliminary?: boolean | undefined
                              episodes_watched?: number | undefined
                            }
                          | {
                              user?: UserMeta | undefined
                              manga?: MangaMeta | undefined
                              mal_id?: number | undefined
                              url?: string | undefined
                              type?: string | undefined
                              reactions?:
                                | {
                                    overall?: number | undefined
                                    nice?: number | undefined
                                    love_it?: number | undefined
                                    funny?: number | undefined
                                    confusing?: number | undefined
                                    informative?: number | undefined
                                    well_written?: number | undefined
                                    creative?: number | undefined
                                  }
                                | undefined
                              date?: string | undefined
                              review?: string | undefined
                              score?: number | undefined
                              tags?: string[] | undefined
                              is_spoiler?: boolean | undefined
                              is_preliminary?: boolean | undefined
                            }
                        )[]
                      | undefined
                    pagination?:
                      | {
                          last_visible_page?: number | undefined
                          has_next_page?: boolean | undefined
                        }
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/:username/recommendations': {
      $get:
        | {
            input: { param: { username: string } } & { query: { page?: number | undefined } }
            output: Recommendations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/:username/clubs': {
      $get:
        | {
            input: { param: { username: string } } & { query: { page?: number | undefined } }
            output: UserClubs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/:username/external': {
      $get:
        | {
            input: { param: { username: string } }
            output: ExternalLinks
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/watch/episodes': {
      $get:
        | { input: {}; output: WatchEpisodes; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/watch/episodes/popular': {
      $get:
        | { input: {}; output: WatchEpisodes; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/watch/promos': {
      $get:
        | {
            input: { query: { page?: number | undefined } }
            output: WatchPromos
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/watch/promos/popular': {
      $get:
        | { input: {}; output: WatchPromos; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  },
  '/'
>
export default routes
