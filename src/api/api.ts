/**
 *
 * @export
 * @interface RegisterData
 */
export interface RegisterData {
  /**
   *
   * @type {string}
   * @memberof RegisterData
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof RegisterData
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof RegisterData
   */
  password: string;
  /**
   *
   * @type {string}
   * @memberof RegisterData
   */
  password_repeat: string;
  /**
   *
   * @type {string}
   * @memberof RegisterData
   */
  msg: string;
  /**
   *
   * @type {string}
   * @memberof RegisterData
   */
}

/**
 *
 * @export
 * @interface LoginData
 */
export interface LoginData {
  /**
   *
   * @type {string}
   * @memberof LoginData
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof LoginData
   */
  password: string;
}
/**
 *
 * @export
 * @interface Credentials
 */
export interface Credentials {
  /**
   *
   * @type {string}
   * @memberof Credentials
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof Credentials
   */
  password: string;
}
