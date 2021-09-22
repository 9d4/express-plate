import { storage_path } from "../app/helpers";

export default {
  /**
   * /storage is the storage root for all kind of storages
   */
  storages: {
    /**
     * Storages where only accessible from the app internal.
     * Can't be accessed from the public.
     * Eg. Download file with auth
     */
    local: [
      /**
       * Name should be unique, no spaces
       * Use storage_path to resolve root
       */
      {
        name: "local0",
        root: storage_path("app"),
      },
    ],

    /**
     * Storages to store static files that can be accessed
     * by public with certain uri.
     */
    public: [
      /**
       * Url from the host address with slash
       */
      {
        url: "/public",
        root: storage_path("public"),
      },
    ],
  },
};
