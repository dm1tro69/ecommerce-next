import {FC} from 'react';
import {Product} from "../../../framework/common/types/product";
import Link from "next/link";
import Image from "next/image";
import s from './ProductCart.module.css'

interface Props{
    product: Product;
}

const placeholderImage = '/product-image-placeholder.svg'

const ProductCard: FC<Props> = ({product}) => {
    return (
        <Link href={`/product/${product.slug}`}>
            <a className={s.root}>
                <div className={s.productBg}></div>
                <div className={s.productTag}>
                    <h3 className={s.productTitle}>
                        <span>{product.name}</span>
                    </h3>
                    <span className={s.productPrice}>$ 14</span>
                </div>
                {
                    product.images && (
                        <Image
                            src={product.images[0].url ?? placeholderImage}
                            alt={product.name}
                            height={540}
                            width={540}
                            quality={'85'}
                            layout={'responsive'}
                        />
                    )
                }
            </a>
        </Link>
    );
};

export default ProductCard;
