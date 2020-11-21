import React, {useCallback, useState} from 'react';
import { useDispatch } from 'react-redux';
import {PrimaryButton, TextInput, SelectBox} from '../components/UIkit';
import {saveProduct} from '../reducks/products/operations'

const ProductEdit = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [gender, setGender] = useState("");
    const [price, setPrice] = useState("");

    const inputName = useCallback((event) => {
        setName(event.target.value)
    }, [setName]);

    const inputDescription = useCallback((event) => {
        setDescription(event.target.value)
    }, [setDescription]);

    const inputPrice = useCallback((event) => {
        setPrice(event.target.value)
    }, [setPrice]);

    const categories = [
        {id: "tops", name: "トップス"},
        {id: "shirts", name: "シャツ"},
        {id: "pants", name: "パンツ"},
    ];

    const genders = [
        {id: "all", name: "すべて"},
        {id: "male", name: "メンズ"},
        {id: "female", name: "レディース"},
    ];

    return(
        <section>
            <h2 className="u-text__headline u-text-center">商品の登録・編集</h2>
            <div className="c-section-container">
                <TextInput
                    fullWidth={true} label={"商品名"} multiline={false} required={true}
                    onChange={inputName} rows={1} type={"text"} value={name}
                />
                <TextInput
                    fullWidth={true} label={"商品説明"} multiline={true} required={true}
                    onChange={inputDescription} rows={5} type={"text"} value={description}
                />
                <SelectBox
                    label={"カテゴリー"} required={true} options={categories} select={setCategory} value={category}
                />
                <SelectBox
                    label={"性別"} required={true} options={genders} select={setGender} value={gender}
                />
                <TextInput
                    fullWidth={true} label={"価格"} multiline={false} required={true}
                    onChange={inputPrice} rows={1} type={"number"} value={price}
                />
                
                <div className="module-spacer--medium" />

                <div className="center">
                    <PrimaryButton
                        label={"商品情報を保存"}
                        onClick={() => dispatch(saveProduct(name, description, category, gender, price))}
                    />
                </div>

            </div>
        </section>
    )
}

export default ProductEdit;