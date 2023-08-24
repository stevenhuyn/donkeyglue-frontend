class GameService {
  static #instance: GameService;

  public static Instance(): GameService {
    if (!this.#instance) {
      this.#instance = new GameService();
    }
    return this.#instance;
  }
}
