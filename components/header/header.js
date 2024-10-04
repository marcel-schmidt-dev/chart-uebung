/**
 * Renders the header component.
 * 
 * This function returns an HTML string that represents the header section of the application.
 * The header includes a balance display and a logo.
 * 
 * @returns {string} The HTML string for the header component.
 */
export default function renderHeader() {
    return /*html*/`
        <div class="header">
            <div>
                <span>My balance</span>
                <span class="heading-l">$921.48</span>
            </div>
            <div>
                <img src="./../../assets/logo.svg" alt="Logo">
            </div>
        </div>
    `;
};