import { Category } from "./category";
import { omit } from "lodash";

describe("Category tests", () => {
  test("constructor of category", () => {

    let category = new Category({ name: "Movie" });

    let props = omit(category.props, "created_at");
    //toStrictEqual é para eu validar se todos os campos do meu objeto estão presentes no teste, se caso for adicionado outro campo no meu Category.ts e eu equecer de colocar ele no meu spc para testes o eteste não irá passar, do contrario, sem o toStrictEqual o teste passaria.
    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
    });

    expect(category.props.created_at).toBeInstanceOf(Date);


    category = new Category({
      name: "Movie",
      description: "some description",
      is_active: false
    });

    let created_at = new Date();

    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "some description",
      is_active: false,
      created_at
    });

    category = new Category({
      name: "Movie",
      description: "other description",
    });

    expect(category.props).toMatchObject({
      name: "Movie",
      description: "other description",
    });

    category = new Category({
      name: "Movie",
      is_active: true,
    });

    expect(category.props).toMatchObject({
      name: "Movie",
      is_active: true,
    });


    created_at = new Date();

    category = new Category({
      name: "Movie",
      created_at,
    });

    expect(category.props).toMatchObject({
      name: "Movie",
      created_at,
    });

    // expect(category.props.name).toBe("Movie");
    // expect(category.props.is_active).toBe(true);
    // expect(category.props.description).toBe("one description");
    // expect(category.props.created_at).toBe(category.props.created_at);

  });
})